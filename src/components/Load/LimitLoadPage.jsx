import dynamic from 'next/dynamic';

const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const LimitLoadPage = ({showFilter=false, showText=false}) => {
    return <div className='flex justify-between items-end gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] pB8M pB8W'>
        <div className='col-span-full md:col-span-3 grid gap-[3px] sm:gap-[3.5px] md:gap-[4px] lg:gap-[3px] xl:gap-[3.5px] 2xl:gap-[4px]'>
            <ConditionalRender cond={showFilter}>
                <div 
                    className="bg-nickel animate-pulse w-[110.39px] sm:w-[128.8px] md:w-[147.19px] lg:w-[96.59px] xl:w-[112.7px] 2xl:w-[130px] h-[15px] sm:h-[17.5px] md:h-[20px] lg:h-[13.13px] xl:h-[15.31px] 2xl:h-[17.5px]" 
                />

                <div 
                    className="bg-nickel animate-pulse w-[110.39px] sm:w-[128.8px] md:w-[147.19px] lg:w-[96.59px] xl:w-[112.7px] 2xl:w-[130px] h-[32px]" 
                />
            </ConditionalRender>
        </div>

        <ConditionalRender cond={showText}>
            <div 
                className="bg-nickel animate-pulse w-[107.03px] sm:w-[124.86px] md:w-[142.7px] lg:w-[107.3px] xl:w-[124.86px] 2xl:w-[142px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[12px] xl:h-[14px] 2xl:h-[16px]" 
            />
        </ConditionalRender>
    </div>
}

export default LimitLoadPage;