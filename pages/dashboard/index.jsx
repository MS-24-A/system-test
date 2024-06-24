import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import useWindowSize from '../../src/hooks/useWindowSize';
import { ALL_PRODUCTS } from '../../src/apollo/graphql/queries';
import useSession from '../../src/context/session';
import { gql, useLazyQuery } from '@apollo/client';

const LayoutMenu = dynamic(() => import("../../src/components/LayoutMenu"));
const TitleLoadPage = dynamic(() => import('../../src/components/Load/TitlePage'));
const TitlePage = dynamic(() => import('../../src/components/Forms/Title'));
const ConditionalRender = dynamic(() => import('../../src/components/ConditionalRender'));
const LimitLoadPage = dynamic(() => import('../../src/components/Load/LimitLoadPage'));
const DataListLoadPage = dynamic(() => import('../../src/components/Load/DataList'));
const CarruselLoad = dynamic(() => import('../../src/components/Load/CarruselLoad'));
const ListWeb = dynamic(() => import('../../src/components/List/Products/Web'));
const InputText = dynamic(() => import('../../src/components/Forms/Inputs').then(module => module.InputText));

import PopUpForms from '../../src/components/PopUp/Forms';
import PopUpDelete from '../../src/components/PopUp/Delete';

const Dashboard = () => {

    const [fetchProducts, {
        data,
        loading,
        error,
    }] = useLazyQuery(gql(ALL_PRODUCTS), {
        fetchPolicy: "no-cache"
    });

    const { isLoggedIn, session } = useSession();

    const router = useRouter();
    const size = useWindowSize();

    // Variables para indicar al layout si existe algun tipo de cargar de información
    const [load, setLoad] = useState(true);
    const [loadDataList, setLoadDataList] = useState(true);
    const [loadDataListFilter, setLoadDataListFilter] = useState(false);

    // Variables para indicar informacion al usuario
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [colorMessage, setColorMessage] = useState('text-black');

    // Datos para la lista a mostrar 
    const [dataList, setDataList] = useState([]);
    const [dataListFilter, setDataListFilter] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [dataListToShow, setDataListToShow] = useState('list');

    // PopUps Valores generales
    const [showBgPopUpList, setShowBgPopUpList] = useState(false);
    const [aditionalDataList, setAditionalDataList] = useState(false);

    // PopUpLists
    const [activePopUpList, setActivePopUpList] = useState(false);
    const [listToShow, setListToShow] = useState('');

    // Filtros
    const [filterName, setFilterName] = useState('');

    // PopUps Valores generales
    const [showBgPopUp, setShowBgPopUp] = useState(false);
    const [aditionalData, setAditionalData] = useState(false);

    // PopUpForms
    const [activePopUpForm, setActivePopUpForm] = useState(false);
    const [formToShow, setFormToShow] = useState('');

    // PopUpDelete
    const [activePopUpDelete, setActivePopUpDelete] = useState(false);
    const [dataToDelete, setDataToDelete] = useState({});

    // Variable para indicar que se recarge la pagina
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (loading) {
            setLoadDataList(true);
        } else {
            setLoadDataList(false);
        }
        if (data) {

            setDataList({
                products: data.allProducts,
                total: 0
            });
        }
        if (error) {
            setMessage("Error obteniendo los datos");
            setShowMessage(true);
            setColorMessage('text-red-600');
        }
    }, [data, loading, error]);

    useEffect(() => {
        if (!isLoggedIn()) {
            router.push("/");
        } else {
            setLoad(false);
        }
    }, [session]);

    useEffect(() => {
        fetchProducts();
    }, [reload]);

    const handleFilter = () => {
        if (data) {
            setDataList({
                products: data.allProducts.filter((p) => p.name.includes(filterName))
            })
        }
    }

    const changeReloading = () => {
        setReload(!reload);
    }

    const handlePopUpForm = ({ show, formToShow, id }) => {
        if (show == true) {
            let dataToSend = {};

            if (id != '') {
                const filterById = dataList?.products.find((b) => b.id == id);
                dataToSend['dataToEdit'] = filterById;
            }

            setAditionalData(dataToSend);
            setShowBgPopUp(show);
            setActivePopUpForm(show);
            setFormToShow(formToShow);
        } else {
            setShowBgPopUp(show);

            setTimeout(() => {
                setFormToShow(formToShow);
                setActivePopUpForm(show);
            }, 600);
        }
    }

    const handlePopUpDelete = ({ show, id }) => {
        if (id != '') {
            const filterById = dataList?.products.find((b) => b.id == id);

            if (filterById) {
                setDataToDelete(filterById);

                if (show == true) {
                    setAditionalData({ originDelete: 'el producto', id: id });
                    setShowBgPopUp(show);
                    setActivePopUpDelete(show);
                } else {
                    setAditionalData({});
                    setShowBgPopUp(show);

                    setTimeout(() => {
                        setActivePopUpDelete(show);
                    }, 600);
                }
            } else {
                setAditionalData({});
                setShowBgPopUp(false);

                setTimeout(() => {
                    setActivePopUpDelete(false);
                }, 600);
            }
        } else {
            setShowBgPopUp(false);

            setTimeout(() => {
                setAditionalData({});
                setActivePopUpDelete(false);
            }, 600);
        }
    }

    return <LayoutMenu title="Productos" section="products" load={load}>
        <section id="__indexAbonadores" className="bg-antiFlashWhite pX12M pX16W grid gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] pB12M pB12W">
            <ConditionalRender cond={load}>
                <TitleLoadPage showAddButton={false} />
            </ConditionalRender>

            <ConditionalRender cond={!load}>
                <TitlePage title='Productos' showAddButton={true} handlePopUpForm={handlePopUpForm} show={true} formToShow='AddProducts' />
            </ConditionalRender>

            <div
                id="__filterUsers"
                className="pX12M pX16W grid grid-cols-12 gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]"
            >
                <div className="col-span-full sm:col-span-6 lg:col-span-3 grid gap-[3px] sm:gap-[3.5px] md:gap-[4px] lg:gap-[3px] xl:gap-[3.5px] 2xl:gap-[4px]">
                    <p className="txt16M txt14W leading-[1.25]">
                        Nombre
                    </p>

                    <InputText
                        disabled={loadDataList || loadDataListFilter}
                        id="name"
                        type="text"
                        required={false}
                        value={filterName}
                        showIcons={false}
                        placeholder="Nombre"
                        onChange={(event) => { setFilterName(event.target.value) }}
                        classContainer={`border border-primary rounded-0 pX12M pX12W py-1 lg:py-2`}
                    />
                </div>

                <div className='col-span-full sm:col-span-6 lg:col-span-3 grid grid-cols-2 gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px]'>
                    <button
                        onClick={() => handleFilter()}
                        type="button"
                        className={[
                            "txt16M txt16W w-full bg-primary border border-primary text-white duration-200 pX20M pX20W pY4M lg:py-[8px] xl:py-[8px] 2xl:py-[8px] track1",
                            "hover:bg-white hover:text-primary",
                            "disabled:bg-primary disabled:text-white disabled:opacity-60",
                            "h-fit mt-auto"
                        ].join(" ")}
                    >
                        Filtrar
                    </button>
                </div>
            </div>

            <div className="pX12M pX16W">
                <ConditionalRender cond={loadDataList || loadDataListFilter}>
                    <LimitLoadPage showFilter={true} showText={true} />
                    <DataListLoadPage />
                    <CarruselLoad />
                </ConditionalRender>

                <ConditionalRender cond={!loadDataList && !loadDataListFilter && showMessage}>
                    <p className={`${colorMessage} txt20M txt24W`}>
                        {message}
                    </p>
                </ConditionalRender>

                <ConditionalRender cond={!loadDataList && !loadDataListFilter && !showMessage}>
                    <ListWeb
                        dataList={dataListToShow == 'list' ? dataList?.products : dataListFilter?.users}
                        handlePopUpDelete={handlePopUpDelete}
                        handlePopUpForm={handlePopUpForm}
                    />

                </ConditionalRender>
            </div>
        </section>

        <ConditionalRender cond={activePopUpForm}>
            <PopUpForms
                showBgPopUp={showBgPopUp}
                handlePopUpForm={handlePopUpForm}
                changeReloading={changeReloading}
                formToShow={formToShow}
                closeByBg={true}
                aditionalData={aditionalData}
            />
        </ConditionalRender>

        <ConditionalRender cond={activePopUpDelete}>
            <PopUpDelete
                showBgPopUp={showBgPopUp}
                handlePopUpDelete={handlePopUpDelete}
                changeReloading={changeReloading}
                dataToDelete={dataToDelete}
                closeByBg={true}
                aditionalData={aditionalData}
            />
        </ConditionalRender>
    </LayoutMenu>
}

export default Dashboard;