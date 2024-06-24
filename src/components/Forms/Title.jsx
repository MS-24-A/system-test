import dynamic from 'next/dynamic';
import useSession from '../../context/session';

const PlusIcon = dynamic(() => import('../../../public/iconsjsx/Plus'));
const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const TitlePage = ({ title = '', showAddButton = false, handlePopUpForm, show = false, formToShow = '' }) => {
    const { session } = useSession();
    const permission = session.getType() == "admin";

    return <div className="w-full grid bg-antiFlashWhite z-30 sticky top-0">
        <div className='pX12M pX16W pY12M pY12W flex justify-between items-center gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px] lg:min-h-[45px] xl:min-h-[48px] 2xl:min-h-[54px]'>
            <h1 className="txt24M txt28W leading-[1]">
                {title}
            </h1>

            <ConditionalRender cond={showAddButton && permission}>
                <button
                    type="button"
                    onClick={() => handlePopUpForm({ show: show, formToShow: formToShow })}
                    className={[
                        "w-[25px] sm:w-[27.5px] md:w-[30px] lg:w-[25px] xl:w-[27.5px] 2xl:w-[30px]",
                        "h-[25px] sm:h-[27.5px] md:h-[30px] lg:h-[25px] xl:h-[27.5px] 2xl:h-[30px]",
                        "bg-white hover:bg-blue-600 hover:border-white group/item duration-200",
                        "border border-black rounded-[4px] cursor-pointer flex items-center justify-center"
                    ].join(" ")}
                >
                    <PlusIcon
                        className={[
                            "w-[15px] sm:w-[17.5px] md:w-[20px] lg:w-[15px] xl:w-[17.5px] 2xl:w-[20px]",
                            "h-[15px] sm:h-[17.5px] md:h-[20px] lg:h-[15px] xl:h-[17.5px] 2xl:h-[20px]",
                            "stroke-black group-hover/item:stroke-white duration-200"
                        ].join(" ")}
                    />
                </button>
            </ConditionalRender>
        </div>

        <div className='w-full border-b border-black' />
    </div>
}

export default TitlePage;