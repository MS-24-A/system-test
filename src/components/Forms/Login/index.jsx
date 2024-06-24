import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { setJWT } from '../../../../utils/accessToken';
import useSession from "../../../context/session";
import { LOGIN } from "../../../apollo/graphql/mutations";
import { useRouter } from "next/router";

const InputText = dynamic(() => import('../Inputs').then(module => module.InputText));
const InputPassword = dynamic(() => import('../Inputs').then(module => module.InputPassword));
const ConditionalRender = dynamic(() => import("../../ConditionalRender"));

const LoginForm = () => {
    const router = useRouter();
    const { setSession } = useSession();
    const [login, __] = useMutation(gql(LOGIN));

    const [loading, setLoading] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [colorMessage, setColorMessage] = useState('');
    const [disableButton, setDisableButton] = useState(true);

    // Variables del formulario
    const [email, setEmail] = useState('');
    const [correctEmail, setCorrectEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [correctPassword, setCorrectPassword] = useState(false);

    useEffect(() => {
        if (password.length > 3) {
            setCorrectPassword(true);
        } else {
            setCorrectPassword(false);
        }

        if (password.length > 3) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, password]);

    const handleLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        setLoading(true);
        setShowMessage(true);
        setMessage('Cargando...');
        setColorMessage("text-black");

        const { data } = await login({
            variables: {
                credentials: {
                    username: email,
                    password: password
                }
            }
        });


        if (data.login) {
            setJWT(data.login.token);

            setMessage('Cargando dependencias.');
            setColorMessage("text-black");

            setTimeout(() => {
                setEmail('');
                setPassword('');
                setSession(data.login);
                setMessage('Iniciando sesión.');
                setColorMessage("text-green-600");

                setTimeout(() => {
                    router.push('/dashboard');
                }, 1_000);
            }, 500);

        } else {
            setTimeout(() => {
                setLoading(false);
                setMessage("Error al iniciar sesión");
                setColorMessage('text-red-600');
            }, 1000);
        }

        /*
        .then(_response => {

            if (_response.data.cancelWithdrawal.status == 500) {
                setMessage(_response.data.cancelWithdrawal.message)
            }
            if (_response.data.cancelWithdrawal.status == 200) {
                setSuccess(true);
                setMessage('successful-cancellation')
                setAmount(amount.replace('?', ''))
            }
            fetchData();
        })
        */

        /*
        */
    }

    return <form
        onSubmit={handleLogin}
        className="w-full grid gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px]"
    >
        <div className="grid gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]">
            <label className="font-HelveticaBold txt20M txt16W leading-[1.25]">
                Correo electrónico
            </label>

            <InputText
                disabled={loading}
                id="email"
                type="text"
                required={false}
                showIcons={correctEmail || errorEmail}
                succesIcon={correctEmail}
                errorIcon={errorEmail}
                placeholder=""
                value={email}
                onChange={((event) => { setEmail(event.target.value) })}
                classContainer="border border-primary rounded-0 px-2 sm:px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-4 py-1 lg:py-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl"
            />
        </div>

        <div className="grid gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]">
            <label className="font-HelveticaBold txt20M txt16W leading-[1.25]">
                Contraseña
            </label>

            <InputPassword
                disabled={loading}
                id="password"
                required={false}
                showIcons={correctPassword}
                succesIcon={correctPassword}
                placeholder=""
                value={password}
                onChange={((event) => { setPassword(event.target.value) })}
                classContainer="border border-primary rounded-0 px-2 sm:px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-4 py-1 lg:py-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl"
            />
        </div>

        <div className="min-h-[15px] sm:min-h-[17.5px] md:min-h-[20px] lg:min-h-[21px] xl:min-h-[24.5px] 2xl:min-h-[28px] flex items-center justify-center">
            <ConditionalRender cond={showMessage}>
                <p className={`${colorMessage} font-HelveticaBold txt20M txt16W`}>
                    {message}
                </p>
            </ConditionalRender>
        </div>

        <button
            disabled={disableButton || loading}
            type="submit"
            className="txt20M txt20W font-Helvetica pY8M pY8W bg-primary border disabled:opacity-60 disabled:bg-primary disabled:text-white border-primary hover:bg-white hover:border-primary hover:text-primary duration-200 w-full text-white track4"
        >
            Entrar
        </button>
    </form>
}

export default LoginForm;