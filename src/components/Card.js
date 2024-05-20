import React, {useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion, useMotionValue} from 'framer-motion'
import { Primary } from './Button'
import { BigAvatar, MediumAvatar, SmallAvatar } from './Avatar'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display ="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);
    }

return (
    <Link 
    href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
        <h2 className='capitalize text-xl font-semibold hover:underline'>
            {title}
        </h2>
        <FramerImage
        style={{x:x, y:y}}
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:0.2}}}
        ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg'/>
    </Link>
    );
};

export const FeaturedProgram = ({type, title, summary, img, link}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl
        bg-light shadow-xl p-8
        '>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />

            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                </div>
                <Primary
                title="Ikuti"
                link="/"
                />
            </div>

        </article>
    )
}

export const Program = ({title, type, img, link}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl bg-light 
            p-6 relative shadow-xl
            '>
                <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    />
    
                </Link>
    
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    {/* <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                        {type}
                    </span> */}
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-2xl font-bold'>
                            {title}
                        </h2>
                    </Link>
                </div>
    
            </article>
        )
    }

export const FeaturedArticle = ({img, title, time, summary, link}) => {
        return (
            <li className='col-span-1 w-full p-4 bg-light shadow-2xl rounded-2xl'>
                <Link
                href={link} 
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    />
                </Link>
                <Link 
                href={link}
                >
                    <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2'>{title}</h2>
                </Link>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary font-semibold'>{time}</span>
            </li>
        )
    }

export const Article = ({img, title, date, link}) => {
        return (
            <motion.li
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once: true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
            bg-light text-dark first:mt-0 shadow-md
            '>
                <MovingImg title={title} img={img} link={link} />
                <span className='text-primary font-semibold pl-4'>{date}</span>
            </motion.li>
        )
    }

export const Community = ({img, title, type, summary, link}) => {
        return (
            <article className='w-full flex items-center justify-between rounded-3xl
        bg-light shadow-xl p-8
        '>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />

            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                </div>
                <Primary
                title="Ikuti"
                link="/"
                />
            </div>

        </article>
        )
    }

export const Forum = ({img, title, type, summary, link, user, date}) => {
        return (
            <article className='w-full flex items-center justify-between rounded-3xl
        bg-primary/5 border border-primary/20 p-8
        '>
            <div
            className='w-1/4 flex flex-col cursor-pointer items-center space-y-4'
            >
                <div className='flex flex-col items-center space-y-2'>
                <BigAvatar
                    link={link}
                    img={img}
                    title="Profile Pengguna"
                />
                <p className='text-lg font-semibold text-primary'>{user}</p>
                </div>
                
                <p className='text-semibold text-dark/75 text-sm'>{date}</p>
            </div>

            <div className='w-3/4 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>
                <Link href={link} className='text-primary text-sm font-semibold'>Lihat Detail</Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                </div>
            </div>

        </article>
        )
    }