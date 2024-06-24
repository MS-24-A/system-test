import dynamic from 'next/dynamic';

const WithDynamicImage = dynamic(() => import('../../../WithDynamicImage'));
const ConditionalRender = dynamic(() => import('../../../ConditionalRender'));

const Td = ({list}) => {
    return list.map((l, i) => {
        return <td key={i} className={`pY8W pX12W`}>
            <ConditionalRender cond={l?.type == 'image'}>
                <div className={`${l?.imgClass}`}>
                    <div className={`${l?.classImgCont} inline-flex`}>
                        <WithDynamicImage image={l?.content} ariaLabel='icon' unoptimized={false} />
                    </div>
                </div>
            </ConditionalRender>
            <ConditionalRender cond={l?.type == 'text' || l?.type == 'boxArea'}>
                <div className={`${l?.type == 'boxArea' ? 'h-[120px] overflow-y-auto scrollDesing' : 'h-auto'}`}>
                    {l?.content}
                </div>
            </ConditionalRender>
            <ConditionalRender cond={l?.type == 'list'}>
                <p className='txt16W'>{l?.content}</p>
            </ConditionalRender>
        </td>
    });
}

export default Td;