import dynamic from 'next/dynamic';

const FilesIcon = dynamic(() => import('../../../../../public/iconsjsx/Files'));
const TruckDeliveryIcon = dynamic(() => import('../../../../../public/iconsjsx/TruckDelivery'));
const ClipboardListIcon = dynamic(() => import('../../../../../public/iconsjsx/ClipboardList'));
const UserIcon = dynamic(() => import('../../../../../public/iconsjsx/User'));
const NewsIcon = dynamic(() => import('../../../../../public/iconsjsx/News'));
const ListIcon = dynamic(() => import('../../../../../public/iconsjsx/List'));
const RulerIcon = dynamic(() => import('../../../../../public/iconsjsx/Ruler'));
const BuildingStoreIcon = dynamic(() => import('../../../../../public/iconsjsx/BuildingStore'));
const UsersIcon = dynamic(() => import('../../../../../public/iconsjsx/Users'));
const ListDetailsIcon = dynamic(() => import('../../../../../public/iconsjsx/ListDetails'));
const ListCheckIcon = dynamic(() => import('../../../../../public/iconsjsx/ListCheck'));
const BuildingWarehouseIcon = dynamic(() => import('../../../../../public/iconsjsx/BuildingWarehouse'));
const WallpapersIcon = dynamic(() => import('../../../../../public/iconsjsx/Wallpapers'));
const ChartBarIcon = dynamic(() => import('../../../../../public/iconsjsx/ChartBar'));
const ChevronRightIcon = dynamic(() => import('../../../../../public/iconsjsx/ChevronRight'));
const BoxMultipleIcon = dynamic(() => import('../../../../../public/iconsjsx/BoxMultiple'));
const PhotoIcon = dynamic(() => import('../../../../../public/iconsjsx/Photo'));
const BoxIcon = dynamic(() => import('../../../../../public/iconsjsx/Box'));
const BlockQuoteIcon = dynamic(() => import('../../../../../public/iconsjsx/BlockQuote'));
const BuildingStadiumIcon = dynamic(() => import('../../../../../public/iconsjsx/BuildingStadium'));
const CardsIcon = dynamic(() => import('../../../../../public/iconsjsx/Cards'));
const FileSpreadsheetIcon = dynamic(() => import('../../../../../public/iconsjsx/FileSpreadsheet'));
const CoinsIcon = dynamic(() => import('../../../../../public/iconsjsx/Coins'));

const ListIcons = ({icon, active=false, showFullMenu}) => {
    switch (icon) {
        case 'Menu':
            return <MenuIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Files':
            return <FilesIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Power':
            return <PowerIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'TruckDelivery':
            return <TruckDeliveryIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'ClipboardList':
            return <ClipboardListIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'User':
            return <UserIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'News':
            return <NewsIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'List':
            return <ListIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Ruler':
            return <RulerIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'BuildingStore':
            return <BuildingStoreIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Users':
            return <UsersIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'ListDetails':
            return <ListDetailsIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'ListCheck':
            return <ListCheckIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'BuildingWarehouse':
            return <BuildingWarehouseIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'FileSpreadsheet':
            return <FileSpreadsheetIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Wallpapers':
            return <WallpapersIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'ChartBar':
            return <ChartBarIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'ChevronRight':
            return <ChevronRightIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'BoxMultiple':
            return <BoxMultipleIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Photo':
            return <PhotoIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Box':
            return <BoxIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'BlockQuote':
            return <BlockQuoteIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'BuildingStadium':
            return <BuildingStadiumIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Cards':
            return <CardsIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        case 'Coins':
            return <CoinsIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
        default:
            return <ChartBarIcon 
                className={[
                    "group-hover:stroke-secundary h-[20px] sm:h-[23px] md:h-[26px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px]",
                    `${active ? 'stroke-secundary' : 'stroke-white'}`,
                    `${showFullMenu ? 'duration-200' : ' duration-[0ms]'}`,
                ].join(" ")}
            />
    }
}

export default ListIcons;