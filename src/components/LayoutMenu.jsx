import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import Head from 'next/head';
import useSession from "../context/session";
import useWindowSize from "../hooks/useWindowSize";

const Header = dynamic(() => import('./LayoutMenu/header'));
const ListMenu = dynamic(() => import('./LayoutMenu/listMenu'));

const Layout = ({ title, section, load = true, children }) => {
    const size = useWindowSize();
    const { session } = useSession();
    const [showFullMenu, setShowFullMenu] = useState(false);

    const changeFullMenu = () => {
        setShowFullMenu(!showFullMenu);
    }

    useEffect(() => {
        if (size.width > 991) {
            setShowFullMenu(true);
        } else {
            setShowFullMenu(false);
        }
    }, [size]);

    return <div className="__app">
        <Head>
            <title>
                {title ? `${title} | System` : 'System'}
            </title>

            <meta name='description' content='System' />
            <link rel='icon' href='/images/ico.svg' />
        </Head>

        <Header
            load={load}
            session={session}
        />

        <div className='flex'>
            <div className="flex-shrink-0 hToBody shadow-xl-r bg-primary relative flex" style={{ overflowX: 'overlay' }}>
                <ListMenu
                    title={title}
                    section={section}
                    load={load}
                    changeFullMenu={changeFullMenu}
                    showFullMenu={showFullMenu}
                />
            </div>

            <div className={`flex-auto bg-antiFlashWhite hToBody overflow-hidden overflow-y-auto scrollDesing expandNextTable border-t border-lightGray scrollDesing`}>
                {children}
            </div>
        </div>
    </div>
}

export default Layout;