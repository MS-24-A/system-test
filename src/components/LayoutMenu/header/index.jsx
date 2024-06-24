import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from "next/router";
import MenuIcon from "../../../../public/iconsjsx/Menu";
import useSession from "../../../context/session";

const ConditionalRender = dynamic(() => import('../../ConditionalRender'));
const WithDynamicImage = dynamic(() => import('../../WithDynamicImage'));

/**
 * 
 * @param {{session: Session}}
 */
export default function Header({ session, load }) {
    const { _, removeSession } = useSession();
    const router = useRouter();

    const removeSessionAction = () => {
        removeSession();
        router.push('/');
    }

    return <header id="__header" className='bg-black pX16M pX20W pY12M pY12W'>
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <ConditionalRender cond={load}>
                    <div className="bg-nickel animate-pulse h-[33px] sm:h-[38.5px] md:h-[44px] lg:h-[33px] xl:h-[38.5px] 2xl:h-[44px] w-[48px] sm:w-[56px] md:w-[64px] lg:w-[48px] xl:w-[56px] 2xl:w-[64px]" />
                </ConditionalRender>
                <ConditionalRender cond={!load}>
                    <div className="h-[33px] sm:h-[38.5px] md:h-[44px] lg:h-[33px] xl:h-[38.5px] 2xl:h-[44px]">
                        <div className="imageContainerH">
                            <WithDynamicImage image="/images/ico.svg" />
                        </div>
                    </div>
                </ConditionalRender>
            </div>

            <div className="col-span-1 flex justify-end items-center gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px]">
                <ConditionalRender cond={load}>
                    <div className='bg-nickel animate-pulse w-[77px] sm:w-[82.5px] md:w-[88px] lg:w-[77px] xl:w-[82.5px] 2xl:w-[88px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]' />
                </ConditionalRender>

                <ConditionalRender cond={!load}>
                    <div className="text-white font-KanitMedium txt16M txt16W leading-[1.25]">
                        <ConditionalRender cond={session}>
                            <p>
                                Hola: <span className="font-KanitRegular">{session.getUsername()}</span>
                            </p>
                        </ConditionalRender>
                        <ConditionalRender cond={!session}>
                            <p className="font-KanitRegular">No session</p>
                        </ConditionalRender>
                    </div>
                </ConditionalRender>

                <div className="group relative">
                    <MenuIcon className={`${load ? 'stroke-nickel animate-pulse' : 'stroke-white'} w-[30px] sm:w-[35px] md:w-[40px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]`} />

                    <div className="absolute z-50 whitespace-nowrap top-[140%] group-hover:top-[100%] right-0 duration-200 delay-75 opacity-0 group-hover:opacity-100 invisible group-hover:visible bg-secundaryLight">
                        <ul className="padYForCol8 padXForCol12 text-center">
                            <li className="pY8M pY8W padXForCol16 hover:bg-primary hover:text-secundaryLight duration-200 text-primary cursor-pointer txt16M txt16W" onClick={() => removeSessionAction()}>
                                Cerrar sesión
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
}