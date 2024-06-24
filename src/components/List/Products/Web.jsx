import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { GENERAL_STATUS } from "../../../../utils/constants";
import useSession from '../../../context/session';

const Thead = dynamic(() => import('../components/Web/Thead'));
const TdWeb = dynamic(() => import('../components/Web/Td'));
const EditIcon = dynamic(() => import("../../../../public/iconsjsx/Edit"));
const TrashIcon = dynamic(() => import("../../../../public/iconsjsx/Trash"));
const ConditionalRender = dynamic(() => import('../../ConditionalRender'));

const ListWeb = ({ dataList, handlePopUpDelete, handlePopUpForm }) => {
    const { session } = useSession();
    const permission = session.getType() == 'admin';
    const [listThead, setListThead] = useState([{ title: 'ID' }, { title: 'Producto' }, { title: 'Precio' }, { title: 'Estatus' }]);

    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        if (permission) {
            setShowButtons(true);

            setListThead([...listThead, { title: 'Acciones' }]);
        }
    }, []);

    return <div className='tableList txt20M txt16W leading-[1.25]'>
        <table className="min-w-full">
            <Thead list={listThead} />

            <tbody>
                {dataList?.map((dl, i) => <tr
                    key={i}
                >
                    <TdWeb list={[
                        {
                            type: 'text',
                            content: <p className='txt16W' dangerouslySetInnerHTML={{ __html: String(dl?.id?.substring(16, 24))?.replace(/(?:\r\n|\r|\n)/g, "<br />") }} />
                        }, {
                            type: 'text',
                            content: <p className='txt16W' dangerouslySetInnerHTML={{ __html: String(dl?.name)?.replace(/(?:\r\n|\r|\n)/g, "<br />") }} />
                        }, {
                            type: 'text',
                            content: <p className='txt16W' dangerouslySetInnerHTML={{ __html: String(`$${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }).format(dl?.price)}`)?.replace(/(?:\r\n|\r|\n)/g, "<br />") }} />
                        }, {
                            type: 'text',
                            content: <p className='txt16W' dangerouslySetInnerHTML={{ __html: String(GENERAL_STATUS[dl?.status]?.name)?.replace(/(?:\r\n|\r|\n)/g, "<br />") }} />
                        }
                    ]} />

                    <ConditionalRender cond={showButtons}>
                        <td className='pY8W pX12W flex items-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]'>
                            <button
                                type="button"
                                onClick={() => handlePopUpForm({ show: true, formToShow: 'EditProducts', id: dl.id })}
                                className="lg:w-[25px] xl:w-[27.5px] 2xl:w-[30px] lg:h-[25px] xl:h-[27.5px] 2xl:h-[30px] bg-white hover:bg-black hover:border-white group/item duration-200 border border-black rounded-[4px] cursor-pointer flex items-center justify-center"
                            >
                                <EditIcon className="lg:w-[15px] xl:w-[17.5px] 2xl:w-[20px] lg:h-[15px] xl:h-[17.5px] 2xl:h-[20px] stroke-black group-hover/item:stroke-white duration-200" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handlePopUpDelete({ show: true, id: dl.id })}
                                className="lg:w-[25px] xl:w-[27.5px] 2xl:w-[30px] lg:h-[25px] xl:h-[27.5px] 2xl:h-[30px] bg-white hover:bg-red-600 hover:border-white group/item duration-200 border border-black rounded-[4px] cursor-pointer flex items-center justify-center"
                            >
                                <TrashIcon className="lg:w-[15px] xl:w-[17.5px] 2xl:w-[20px] lg:h-[15px] xl:h-[17.5px] 2xl:h-[20px] stroke-black group-hover/item:stroke-white duration-200" />
                            </button>
                        </td>
                    </ConditionalRender>
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default ListWeb;