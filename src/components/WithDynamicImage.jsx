import Image from 'next/image';

const WithDynamicImage = ({image, alt="", unoptimized=true, ariaLabel=''}) => {
    return <Image
        sizes="100vw"
        fill
        src={image}
        alt={alt}
        className='image'
        loading="lazy"
        unoptimized={unoptimized}
        priority={false}
        aria-label={ariaLabel}
    />
}

export async function getServerSideProps() {
    const image = await getImages() // fetch your data;
    const imageDynamic = image[param.id] //pass the prop from the url
  
    return { props: { image : imageDynamic || null } };
}
  
export default WithDynamicImage;