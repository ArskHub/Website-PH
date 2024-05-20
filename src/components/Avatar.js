import Image from "next/image";
import Link from "next/link";

export const BigAvatar = ({img, link, title}) => {
    return (
        <div>
        <Link href={link} title={title}>
            <Image src={img} alt={title} className='w-20 h-20 rounded-full'/>
        </Link>
        </div>
    )
}
export const MediumAvatar = ({img, link, title}) => {
    return (
        <div>
        <Link href={link} title={title}>
            <Image src={img} alt={title} className='w-14 h-14 rounded-full'/>
        </Link>
        </div>
    )
}

export const SmallAvatar = ({img, link, title}) => {
    return (
        <Link href={link} title={title}>
            <Image src={img} alt={title} className='w-10 h-auto rounded-full'/>
        </Link>
    )
}


