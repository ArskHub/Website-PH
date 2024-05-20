import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import smallLogo from '../../public/images/profile/small-logo.png'
import profile from '../../public/images/profile/profile-icon.png'
import { Primary } from './Button'
import { MediumAvatar } from './Avatar' //need to be debug

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    //bagian span itu untuk garis yang ada di bawah title NavBar
    //group-hover itu code waktu dia hover kayak gimana
    //yang router itu untuk membuat garis width-full ketika ada dalam page dengan title itu
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

        <span className={`
        h-[1.5px] inline-block bg-primary
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'} 
        `}
        >&nbsp;</span> 
        </Link>
    )
};

const NavBar = () => {

    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <Link href="/" title="Beranda">
                <Image src={smallLogo} alt="smallLogo" width='4rem' height='1rem' className='w-full h-auto'/>
                </Link>
            </nav>
            
            <nav>
                <CustomLink href="/" title="Beranda" className='mr-4'/>
                <CustomLink href="/community" title="Komunitas" className='mx-4'/>
                <CustomLink href="/program" title="Program" className='mx-4'/>
                <CustomLink href="/articles" title="Artikel" className='ml-4'/>
            </nav>
            
            <nav className="flex items-center justify-center flex-wrap space-x-4">

                <Primary
                link="/login"
                title="Masuk"
                />

                <MediumAvatar
                    link="/"
                    title="Profile Pengguna"
                    img={profile}
                />

            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            </div>
        </header>
    )
}

export default NavBar