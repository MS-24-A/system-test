import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Formularios de Agregar
const AddProducts = dynamic(() => import('../Forms/AddForms/Products'));

// Formularios de edicion
const EditProducts = dynamic(() => import('../Forms/EditForms/Products'));

const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const ListForms = ({ formToShow, loading, setLoading, changeReloading, handlePopUpForm, aditionalData }) => {
    switch (formToShow) {
        case 'AddProducts':
            return <AddProducts loading={loading} setLoading={setLoading} changeReloading={changeReloading} handlePopUpForm={handlePopUpForm} aditionalData={aditionalData} />
        case 'EditProducts':
            return <EditProducts loading={loading} setLoading={setLoading} changeReloading={changeReloading} handlePopUpForm={handlePopUpForm} aditionalData={aditionalData} />

        default:
            break;
    }
}

const PopUpForms = ({ showBgPopUp, handlePopUpForm, formToShow, changeReloading, closeByBg = false, aditionalData = {} }) => {
    const [loading, setLoading] = useState(false);
    const [bgClass, setBgClass] = useState('bg-opacity-0');
    const [containerClass, setContainerClass] = useState('scale-0 opacity-0');

    useEffect(() => {
        if (showBgPopUp) {
            setBgClass('bg-opacity-50 backdrop-blur-[3px]');
            setContainerClass('scale-100 opacity-100');
        } else {
            setBgClass('bg-opacity-0 backdrop-blur-[0px]');
            setContainerClass('scale-0 opacity-0');
        }
    }, [showBgPopUp]);

    return <>
        <section
            id="__popUp"
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[200] flex items-center justify-center"
        >
            <ConditionalRender cond={loading == true || closeByBg == false}>
                <div className={`bg-primary fixed top-0 left-0 w-full h-full z-10 ${bgClass} duration-[600ms]`} />
            </ConditionalRender>
            <ConditionalRender cond={loading == false && closeByBg == true}>
                <div
                    onClick={() => handlePopUpForm({ show: false, formToShow: '' })}
                    className={`bg-primary fixed top-0 left-0 w-full h-full z-10 ${bgClass} duration-[600ms]`}
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
                    {
                        ListForms({
                            formToShow: formToShow,
                            loading: loading,
                            setLoading: setLoading,
                            changeReloading: changeReloading,
                            handlePopUpForm: handlePopUpForm,
                            aditionalData: aditionalData
                        })
                    }
                </div>
            </div>
        </section>
    </>
}

export default PopUpForms;