import dynamic from 'next/dynamic';

const ChevronRightIcon = dynamic(() => import('../../../../../public/iconsjsx/ChevronRight'));

const Head = ({activeBox, setActiveBox, title}) => {
    return <div 
        onClick={() => setActiveBox(!activeBox)}
        className={`text-white rounded-[8px] bg-black pY8M pX12M grid grid-cols-9 gap-[6px] sm:gap-[7px] md:gap-[8px] cursor-pointer ${activeBox ? 'rounded-b-none' : ''} duration-200`}
    >
        <div className='col-span-8 flex items-center'>
            <p className='break-words overflow-hidden whitespace-pre-wrap font-KanitLight' dangerouslySetInnerHTML={{ __html: title?.replace(/(?:\r\n|\r|\n)/g, "<br />") }} />
        </div>
        
        <div className='col-span-1 flex justify-end items-center'>
            <div className={`${activeBox ? 'rotate-90' : 'rotate-0'} duration-200`}>
                <ChevronRightIcon className="stroke-white w-[28px]" />
            </div>
        </div>
    </div>
}

export default Head;