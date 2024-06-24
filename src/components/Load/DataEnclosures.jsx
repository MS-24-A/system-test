const DataListLoadPage = () => {
    const ContainerData = () => {
        return <div className="flex justify-between border-b-2 last:border-b-0 border-nickel border-dashed pY8M pY8W animate-pulse">
            <div className="h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px] w-[15%] bg-nickel" />
            <div className="h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px] w-[10%] bg-nickel" />
        </div>
    }

    return <> 
        <div className='flex justify-between items-end gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px] pB8M pB8W animate-pulse'>
            <div className="h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px] w-[20%] bg-nickel ml-auto" />
        </div>

        <ContainerData />
        <ContainerData />
        <ContainerData />
        <ContainerData />
        <ContainerData />
    </>
}

export default DataListLoadPage;