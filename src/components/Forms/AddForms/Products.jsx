import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { CREATE_PRODUCT } from '../../../apollo/graphql/mutations';
import { gql, useMutation } from "@apollo/client";

const InputText = dynamic(() => import('../Inputs').then(module => module.InputText));
const ConditionalRender = dynamic(() => import('../../ConditionalRender'));

const ProductsAddForm = ({ loading, setLoading, changeReloading, handlePopUpForm }) => {

    const [createProduct, __] = useMutation(gql(CREATE_PRODUCT));

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [colorMessage, setColorMessage] = useState('text-black');
    const [disabledButton, setDisabledButton] = useState(true);
    const [showClosed, setShowClosed] = useState(false);

    // Variables para la lista del formulario
    const [name, setName] = useState('');
    const [correctName, setCorrectName] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {

        if (name != null && name.length > 0) {
            setCorrectName(true);
            setErrorName(false);
        } else {
            setCorrectName(false);
            setErrorName(false);
        }

        if (name != null && name.length > 0) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }, [name]);

    const handleAdd = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        setLoading(true);
        setShowMessage(true);
        setMessage('Cargando...');
        setColorMessage('text-black');

        const { data } = await createProduct({
            variables: {
                product: {
                    name: name,
                    price: Number(price)
                }
            }
        });

        if (data.createProduct.error) {
            setTimeout(() => {
                setLoading(false);
                setColorMessage('text-red-600');
                setMessage(data.createProduct.message || "Error en el servidor.");
            }, 800);
        } else {
            setMessage(data.createProduct.message);
            setColorMessage('text-green-600');
            setShowClosed(true);
            changeReloading();

            setTimeout(() => {
                handlePopUpForm({ show: false, formToShow: '' });
            }, 1500);
        }
    }

    return <>
        <h2 className="font-KanitBold text-center uppercase txt20M txt28W track2 leading-[1.25]">
            Agregar producto
        </h2>

        <form
            id="__addProduct"
            className="w-full grid grid-cols-6 gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]"
            onSubmit={handleAdd}
        >
            <div className='col-span-full grid grid-cols-6 gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px]'>
                <div className='col-span-full lg:col-span-3'>
                    <div className='grid gap-[3px] sm:gap-[3.5px] md:gap-[4px] lg:gap-[3px] xl:gap-[3.5px] 2xl:gap-[4px]'>
                        <p className="txt16M txt14W leading-[1.25]">
                            Nombre
                        </p>

                        <InputText
                            disabled={loading}
                            id="name"
                            type="text"
                            required={false}
                            value={name}
                            showIcons={correctName || errorName}
                            succesIcon={correctName}
                            errorIcon={errorName}
                            placeholder="Nombre"
                            onChange={(event) => { setName(event.target.value) }}
                            classContainer={`border border-black rounded-0 pX12M pX12W py-1 lg:py-2`}
                        />
                    </div>
                </div>

                <div className='col-span-full lg:col-span-3'>
                    <div className='grid gap-[3px] sm:gap-[3.5px] md:gap-[4px] lg:gap-[3px] xl:gap-[3.5px] 2xl:gap-[4px]'>
                        <p className="txt16M txt14W leading-[1.25]">
                            Precio
                        </p>

                        <InputText
                            disabled={loading}
                            id="price"
                            type="text"
                            required={false}
                            value={price}
                            placeholder="Precio"
                            onChange={(event) => { setPrice(event.target.value) }}
                            classContainer={`border border-black rounded-0 pX12M pX12W py-1 lg:py-2`}
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-full min-h-[15px] sm:min-h-[17.5px] md:min-h-[20px] lg:min-h-[21px] xl:min-h-[24.5px] 2xl:min-h-[28px] flex items-center justify-center">
                <ConditionalRender cond={showMessage}>
                    <p
                        className={`${colorMessage} txt20M txt16W text-center`}
                        dangerouslySetInnerHTML={{ __html: message?.replace(/(?:\r\n|\r|\n)/g, "<br />") }}
                    />
                </ConditionalRender>
            </div>

            <div className="col-span-full">
                <div className="gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px] flex items-center justify-center">
                    <ConditionalRender cond={!showClosed}>
                        <button
                            disabled={loading}
                            onClick={() => handlePopUpForm({ show: false, formToShow: '' })}
                            type="button"
                            className={[
                                "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track4",
                                "hover:bg-white hover:text-primary",
                                "disabled:bg-primary disabled:text-white disabled:opacity-60"
                            ].join(" ")}
                        >
                            Cancelar
                        </button>
                        <button
                            disabled={disabledButton || loading}
                            type="submit"
                            className={[
                                "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track4",
                                "hover:bg-white hover:text-primary",
                                "disabled:bg-primary disabled:text-white disabled:opacity-60"
                            ].join(" ")}
                        >
                            Agregar
                        </button>
                    </ConditionalRender>
                    <ConditionalRender cond={showClosed}>
                        <button
                            onClick={() => handlePopUpForm({ show: false, formToShow: '' })}
                            type="button"
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
        </form>
    </>
}

export default ProductsAddForm;