import React from "react";
import Image from "next/image";

export const ArticleContent = ({img, title, time, text, user, date, profile}) => {
    return (
        <>
            <div className='flex flex-col items-center justify-between w-full px-40'>
                {/* <Image src={img} alt={title}/> */}
                <h1 className='font-bold text-left text-5xl'>
                    {title}
                </h1>
                <div className='pt-8 space-y-12'>
                    <div className='w-full h-16 flex space-x-4 items-center'>
                        <Image src={profile} alt={user} className='rounded-full w-16 h-full'/>
                        <div className='flex flex-col items-left justify-center'>
                            <span className='text-lg font-semibold text-primary'>{user}</span>
                            <p className='text-semibold text-dark/75 text-sm'>{date} | {time}</p>
                        </div>
                    </div>
                    <div className='border border-solid border-dark/10 w-full'></div>
                    <p className='text-lg'>{text}</p>
                </div>
            </div>
        </>
    )
}