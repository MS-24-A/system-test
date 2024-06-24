import dynamic from 'next/dynamic';

const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const TitlePageLoad = ({showAddButton=false}) => {
    return <div className="w-full grid bg-antiFlashWhite z-10 sticky top-0">
        <div 
            className={[
                "pX12M pX16W pY12M pY12W flex justify-between items-center",
                "gap-[9px] sm:gap-[10.5px] md:gap-[12px] lg:gap-[9px] xl:gap-[10.5px] 2xl:gap-[12px]",
                "lg:min-h-[45px] xl:min-h-[48px] 2xl:min-h-[54px]"
            ].join(" ")} 
        >
            <div 
                className={[
                    "w-[120px] sm:w-[140px] md:w-[160px] lg:w-[150px] xl:w-[175px] 2xl:w-[200px]",
                    "h-[18px] sm:h-[21px] md:h-[24px] lg:h-[21px] xl:h-[24.5px] 2xl:h-[28px]",
                    "bg-nickel animate-pulse"
                ].join(" ")} 
            />

            <ConditionalRender cond={showAddButton == true}>
                <div
                    className={[
                        "w-[25px] sm:w-[27.5px] md:w-[30px] lg:w-[25px] xl:w-[27.5px] 2xl:w-[30px]",
                        "h-[25px] sm:h-[27.5px] md:h-[30px] lg:h-[25px] xl:h-[27.5px] 2xl:h-[30px]",
                        "bg-nickel animate-pulse rounded-[4px]"
                    ].join(" ")} 
                >
                </div>
            </ConditionalRender>
        </div>

        <div className='w-full border-b border-black' />
    </div>
}

export default TitlePageLoad;