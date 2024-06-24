import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSession from '../../../context/session';
import { MENU_LINKS } from '../../../../utils/constants';
import ListIcons from './components/ListIcons';
import { useRouter } from 'next/router'

const MenuIcon = dynamic(() => import('../../../../public/iconsjsx/Menu'));
const PowerIcon = dynamic(() => import('../../../../public/iconsjsx/Power'));
const ConditionalRender = dynamic(() => import('../../ConditionalRender'));

const BlockRouter = ({ ll, section, showFullMenu }) => {
    return <Link href={ll?.link} passHref>
        <div className='flex justify-between items-center cursor-pointer group'>
            <p
                className={[
                    "group-hover:text-secundary",
                    `${section == ll?.section ? 'font-KanitBold text-secundary' : 'font-KanitRegular'}`,
                    `${showFullMenu ? 'txt16M txt16W' : 'text-[0px]'} duration-200`,
                ].join(" ")}
            >
                {ll?.title}
            </p>

            {ListIcons({ icon: ll?.icon, active: (section == ll?.section), showFullMenu: showFullMenu })}
        </div>
    </Link>
}

const BlockButton = ({ ll, title, section, showFullMenu }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        const existTitle = ll.subMenu.filter(res => String(section) == String(res.section));

        if (existTitle.length > 0) {
            setShowSubMenu(true);
        }
    }, []);

    return <>
        <button className='flex justify-between items-center cursor-pointer group w-full' onClick={() => setShowSubMenu(!showSubMenu)}>
            <p
                className={[
                    "group-hover:text-secundary",
                    `${showSubMenu ? 'font-KanitBold text-secundary' : 'font-KanitRegular'}`,
                    `${showFullMenu ? ' mX8M mX12W mXList txt16M txt16W' : 'text-[0px]'} duration-200`
                ].join(" ")}
            >
                {ll.title}
            </p>

            <div className={`${showSubMenu ? 'rotate-90' : 'rotate-0'} duration-200`}>
                {ListIcons({ icon: ll?.icon, active: showSubMenu, showFullMenu: showSubMenu })}
            </div>
        </button>

        <ConditionalRender cond={showSubMenu}>
            <div className={`pY8M pY8W ${showFullMenu ? 'pX4M pX4W' : 'px-0'} `}>
                <ul className='text-white flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                    {
                        ll.subMenu.map((ll, i) => {
                            return <ConditionalRender key={i} cond={permissions?.includes(ll?.section) || permissions?.includes(ll?.subSection)}>
                                <li>
                                    <BlockRouter ll={ll} title={title} section={section} showFullMenu={showFullMenu} />
                                </li>
                            </ConditionalRender>
                        })
                    }
                </ul>
            </div>
        </ConditionalRender>
    </>
}

const ListMenu = ({ section, load, showFullMenu, changeFullMenu }) => {
    const { session } = useSession();
    const { _, removeSession } = useSession();
    const router = useRouter()

    const removeSessionAction = () => {
        removeSession();
        router.push('/');
    }

    return <div id='__listMenu' className={`${showFullMenu ? 'min-w-[240px]' : 'min-w-[0px]'} leading-[1.25] duration-200`}>
        <div className='pY8M pY8W border-b-[1px] border-white text-white font-KanitRegular pX16M pX20W flex justify-between items-center group' >
            <ConditionalRender cond={load}>
                <div className='w-full h-[24px] bg-white rounded-[6px] animate-pulse opacity-80' />
            </ConditionalRender>
            <ConditionalRender cond={!load}>
                <button className={`flex justify-between items-center ${showFullMenu ? 'w-full' : ''}`} onClick={() => changeFullMenu()}>
                    {
                        session.getUsername() ?
                            <p className={`${showFullMenu ? 'txt16M txt16W' : 'text-[0px]'} duration-200`}>
                                {session.getUsername()}
                            </p>
                            :
                            <p className={`${showFullMenu ? 'txt16M txt16W' : 'text-[0px]'} duration-200`}>No session</p>
                    }

                    <MenuIcon
                        className={[
                            "stroke-white w-[18px] sm:w-[21px] md:w-[24px] lg:w-[21px] xl:w-[24.5] 2xl:w-[28px] hover:stroke-secundary cursor-pointer"
                        ].join(" ")}
                    />
                </button>
            </ConditionalRender>
        </div>

        <div className="grid h-[calc(100%-68px)] sm:h-[calc(100%-79px)] md:h-[calc(100%-90px)] lg:h-[calc(100%-68px)] xl:h-[calc(100%-79px)] 2xl:h-[calc(100%-90px)] overflow-hidden overflow-y-auto scrollDesing pY12M pY12W pX16M pX20W">
            <ConditionalRender cond={load}>
                <div className='w-full h-full bg-white rounded-[8px] animate-pulse opacity-80' />
            </ConditionalRender>

            <ConditionalRender cond={!load}>
                <ul className='text-white flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                    {
                        MENU_LINKS.map((ll, i) => {

                            return <li>
                                <ConditionalRender cond={!ll.showMnenu}>
                                    <BlockRouter ll={ll} section={section} showFullMenu={showFullMenu} />
                                </ConditionalRender>
                                <ConditionalRender cond={ll.showMnenu}>
                                    <BlockButton ll={ll} section={section} showFullMenu={showFullMenu} />
                                </ConditionalRender>
                            </li>
                        })
                    }
                </ul>
            </ConditionalRender>
        </div>

        <div className='pY8M pY8W border-t-[1px] border-white pX16M pX20W' >
            <button className={`flex justify-between items-center ${showFullMenu ? 'w-full' : ''}`} onClick={() => removeSessionAction()}>
                <h2 className={`${showFullMenu ? 'txt16M txt16W' : 'text-[0px]'} text-white duration-200`}>
                    Cerrar sesión
                </h2>

                <PowerIcon
                    className={[
                        "stroke-white w-[18px] sm:w-[21px] md:w-[24px] lg:w-[21px] xl:w-[24.5] 2xl:w-[28px] hover:stroke-secundary cursor-pointer",
                        `${showFullMenu ? 'mX8M mX12W mXList' : ''}`
                    ].join(" ")}
                />
            </button>
        </div>
    </div>
}

export default ListMenu;