import dynamic from 'next/dynamic';

const WithDynamicImage = dynamic(() => import('../../../WithDynamicImage'));
const ConditionalRender = dynamic(() => import('../../../ConditionalRender'));

const Body = ({list}) => {
    return list.map((l, i) => {
        return <>
            <div key={i} className={l.aditionalClass}>
                <ConditionalRender cond={l?.type == 'image'}>
                    <div className={`${l?.imgClass} ${l.aditionalClass == 'text-center' ? 'mx-auto' : ''}`}>
                        <div className={`${l?.classImgCont} inline-flex`}>
                            <WithDynamicImage image={l?.content} ariaLabel='icon' unoptimized={false} />
                        </div>
                    </div>
                </ConditionalRender>
                <ConditionalRender cond={l?.type == 'text' || l?.type == 'boxArea'}>
                    <p className='txt16M'>
                        <span className='font-KanitBold'>{l.title}:</span> {l?.content}
                    </p>
                </ConditionalRender>
                <ConditionalRender cond={l?.type == 'list'}>
                    <p className='txt16M listOptionsSend'>
                        <bold className='font-KanitBold'>{l.title}</bold>: {l?.content}
                    </p>
                </ConditionalRender>
            </div>
        </>
    })
}

export default Body;