import dynamic from 'next/dynamic';

const ChevronRight = dynamic(() => import("../../../public/iconsjsx/ChevronRight"));
const ChevronLefth = dynamic(() => import("../../../public/iconsjsx/ChevronLefth"));

const CarruselLoad = () => {
    return <div className="flex items-center justify-center pT12M pT12W animate-pulse duration-200">
        <ChevronLefth className="w-[36px] h-[36px] stroke-nickel" />

        <div className="w-[36px] h-[36px] bg-davysGrey rounded-full" />
        <div className="w-[36px] h-[36px] bg-davysGrey rounded-full" />
        <div className="w-[36px] h-[36px] bg-davysGrey rounded-full" />

        <ChevronRight className="w-[36px] h-[36px]  stroke-nickel" />
    </div>
}

export default CarruselLoad;