const Thead = ({list}) => {
    return <thead>
        <tr className={`text-white sticky lg:top-[45px] xl:top-[49px] 2xl:top-[54px] left-0 bg-black z-10`}>
            {
                list.map((l, i) => {
                    return <th key={i} className="py-1 font-light pX12W">
                        {l.title}
                    </th>
                })
            }
        </tr>
    </thead>
}

export default Thead;