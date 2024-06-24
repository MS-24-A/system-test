import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from '../../apollo/graphql/mutations';

const AlertCircleIcon = dynamic(() => import("../../../public/iconsjsx/AlertCircle"));
const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const DeleteRecord = ({ showBgPopUp, handlePopUpDelete, changeReloading, dataToDelete, closeByBg, aditionalData }) => {
    const [deleteProduct, __] = useMutation(gql(DELETE_PRODUCT));
    const [bgClass, setBgClass] = useState('bg-opacity-0');
    const [containerClass, setContainerClass] = useState('scale-0 opacity-0');
    const [loading, setLoading] = useState(false);
    const [showDeleted, setShowDeleted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (showBgPopUp) {
            setBgClass('bg-opacity-60 backdrop-blur-[2px]');
            setContainerClass('scale-100 opacity-100');
        } else {
            setBgClass('bg-opacity-0 backdrop-blur-[0px]');
            setContainerClass('scale-0 opacity-0');
        }
    }, [showBgPopUp]);

    const actionDelete = async ({ apiDelete, idToDelete }) => {
        setLoading(true);
        setShowMessage(true);
        setMessage(`Eliminando ${aditionalData?.originDelete}.`);

        const { data } = await deleteProduct({
            variables: {
                id: aditionalData?.id
            }
        });

        if (data.deleteProduct.error) {
            setShowMessage(true);
            setMessage(data.deleteProduct.message || "Error en el servidor.");

            setTimeout(() => {
                setLoading(false);
                setShowMessage(false);
                setMessage("");
            }, 1500);
        } else {
            setTimeout(() => {
                setShowMessage(true);
                setMessage(data.deleteProduct.message);
                setLoading(false);
                setShowDeleted(true);

                setTimeout(() => {
                    handlePopUpDelete({ status: false, id: '' });
                    changeReloading();
                }, 1500);
            }, 1000);
        }
    }

    return <section
        id="__popUpDelete"
        className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[200] flex items-center justify-center"
    >
        <ConditionalRender cond={loading == true || closeByBg == false}>
            <div className={`bg-davysGrey fixed top-0 left-0 w-full h-full z-10 ${bgClass} duration-[600ms]`} />
        </ConditionalRender>
        <ConditionalRender cond={loading == false && closeByBg == true}>
            <div
                onClick={() => handlePopUpDelete({ show: false, id: '' })}
                className={`bg-davysGrey fixed top-0 left-0 w-full h-full z-10 ${bgClass} duration-[600ms]`}
            />
        </ConditionalRender>

        <div
            className={[
                `w-[calc(100%-16px)] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] mx-auto overflow-hidden ${!loading && 'overflow-y-auto'} scrollDesing h-auto relative z-20 ${containerClass} duration-[600ms]`,
                "max-h-[calc(100%-24px)] sm:max-h-[calc(100%-28px)] md:max-h-[calc(100%-32px)] lg:max-h-[calc(100%-30px)] xl:max-h-[calc(100%-35px)] 2xl:max-h-[calc(100%-40px)]",
                "border-primary border-[3px] sm:border-[3.5px] md:border-[4px] lg:border-[3px] xl:border-[3.5px] 2xl:border-[4px]",
            ].join(" ")}
        >
            <div className={[
                "bg-antiFlashWhite relative grid gap-[14px] sm:gap-[14px] md:gap-[16px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]",
                "rounded-[0px] pX16M pX16W pY16M pY16W"
            ].join(" ")}
            >
                <AlertCircleIcon
                    className="
                        stroke-red-600 mx-auto
                        w-[36px] sm:w-[42px] md:w-[48px] lg:w-[90px] xl:w-[105px] 2xl:w-[120px] 
                        h-[36px] sm:h-[42px] md:h-[48px] lg:h-[90px] xl:h-[105px] 2xl:h-[120px]
                    "
                />

                <h2 className="font-KanitBold text-center uppercase txt20M txt28W track2 leading-[1.25]">
                    ¿Se eliminara {aditionalData?.originDelete}?
                </h2>

                <p className='h-[20px] text-center txt20M txt16W'>
                    <ConditionalRender cond={showMessage}>
                        {message}
                    </ConditionalRender>
                </p>

                <div className="gap-[12px] sm:gap-[14px] md:gap-[16px] lg:gap-[15px] xl:gap-[17.5px] 2xl:gap-[20px] txt20M txt16W leading-[1.25] flex items-center justify-center">
                    <ConditionalRender cond={!showDeleted}>
                        <button
                            disabled={loading}
                            onClick={() => handlePopUpDelete({ show: false, id: '' })}
                            type="submit"
                            className={[
                                "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track4",
                                "hover:bg-white hover:text-primary",
                                "disabled:bg-primary disabled:text-white disabled:opacity-60"
                            ].join(" ")}
                        >
                            Cancelar
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => actionDelete({ apiDelete: aditionalData.apiUrl, idToDelete: dataToDelete._id })}
                            type="submit"
                            className={[
                                "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track4",
                                "hover:bg-white hover:text-primary",
                                "disabled:bg-primary disabled:text-white disabled:opacity-60"
                            ].join(" ")}
                        >
                            Aceptar
                        </button>
                    </ConditionalRender>
                    <ConditionalRender cond={showDeleted}>
                        <button
                            disabled={loading}
                            onClick={() => handlePopUpDelete({ show: false, id: '' })}
                            type="submit"
                            className={[
                                "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track4",
                                "hover:bg-white hover:text-primary",
                                "disabled:bg-primary disabled:text-white disabled:opacity-60"
                            ].join(" ")}
                        >
                            Cerrar
                        </button>
                    </ConditionalRender>
                </div>
            </div>
        </div>
    </section>
}

export default DeleteRecord;