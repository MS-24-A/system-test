import dynamic from 'next/dynamic';
import useWindowSize from '../../hooks/useWindowSize';

const ConditionalRender = dynamic(() => import('../ConditionalRender'));

const DataListLoadPage = () => {
    const size = useWindowSize();

    const ContainerMobile = () => {
        return <div className='rounded-[8px] bg-black pY8M pX12M flex justify-between gap-[6px] sm:gap-[7px] md:gap-[8px] cursor-pointer animate-pulse duration-200'>
            <div className='h-[28px] w-[120px] sm:w-[140px] md:w-[160px] bg-nickel' />
            <div className='h-[28px] w-[28px] bg-nickel' />
        </div>
    }

    return <>
        <ConditionalRender cond={size.width > 991}>
            <div className='tableList'>
                <table className='min-w-full animate-pulse duration-200'>
                    <thead>
                        <tr>
                            <th className='lg:h-[24px] xl:h-[26.5px] 2xl:h-[29px] bg-black' />
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                        <tr><td className="pY8W pX12W text-center"><div className='lg:min-h-[18px] xl:min-h-[21px] 2xl:min-h-[24px]' /></td></tr>
                    </tbody>
                </table>
            </div>
        </ConditionalRender>

        <ConditionalRender cond={size.width < 992}>
            <div className='grid gap-[6px] sm:gap-[7px] md:gap-[8px]'>
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
                <ContainerMobile />
            </div>
        </ConditionalRender>
    </>
}

export default DataListLoadPage;