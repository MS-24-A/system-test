import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSession from '../src/context/session';

const LayoutMenu = dynamic(() => import('../src/components/LayoutMenu'));
const LoginForm = dynamic(() => import('../src/components/Forms/Login'));
const ConditionalRender = dynamic(() => import('../src/components/ConditionalRender'));

const Home = () => {
    const router = useRouter();
    const [load, setLoad] = useState(true);
    const { session, isLoggedIn } = useSession();

    useEffect(() => {
        if (!isLoggedIn()) {
            setLoad(false);
        } else {
            router.push('/dashboard');
        }
    }, [session]);

    return <LayoutMenu title="Login">
        <section
            id="__popUp"
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[200] flex items-center justify-center"
        >
            <div className={`bg-antiFlashWhite fixed top-0 left-0 w-full h-full z-10 bg-opacity-100 backdrop-blur-[2px] duration-[600ms]`} />
            <ConditionalRender cond={load}>
                <div className='w-[calc(100%-16px)] sm:w-[350px] md:w-[400px] lg:w-[426px] xl:w-[497px] 2xl:w-[568px] h-[319px] sm:h-[365px] md:h-[410px] lg:h-[352px] xl:h-[407px] 2xl:h-[462px] bg-nickel animate-pulse z-20' />
            </ConditionalRender>

            <ConditionalRender cond={!load}>
                <div
                    className={[
                        `w-[calc(100%-16px)] sm:w-[350px] md:w-[400px] lg:w-[426px] xl:w-[497px] 2xl:w-[568px] mx-auto overflow-hidden ${!load && 'overflow-y-auto'} scrollDesing h-auto relative z-20 scale-100 opacity-100 duration-[600ms]`,
                        "max-h-[calc(100%-24px)] sm:max-h-[calc(100%-28px)] md:max-h-[calc(100%-32px)] lg:max-h-[calc(100%-30px)] xl:max-h-[calc(100%-35px)] 2xl:max-h-[calc(100%-40px)]",
                        "border-primary border-[3px] sm:border-[3.5px] md:border-[4px] lg:border-[3px] xl:border-[3.5px] 2xl:border-[4px]",
                    ].join(" ")}
                >
                    <div className={[
                        "bg-white relative grid gap-[14px] sm:gap-[14px] md:gap-[16px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]",
                        "rounded-[0px] pX16M pX16W pY16M pY16W"
                    ].join(" ")}
                    >
                        <img src="/logo.png" className="grayscale mx-auto h-[48px] sm:h-[56px] md:h-[64px] lg:h-[60px] xl:h-[70px] 2xl:h-[80px] opacity-80" />

                        <h2 className="font-KanitBold text-center uppercase txt20M txt28W track2">Inicio de sesión</h2>

                        <LoginForm />
                    </div>
                </div>
            </ConditionalRender>
        </section>
    </LayoutMenu>
}

export default Home;