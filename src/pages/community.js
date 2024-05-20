import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import image1 from "../../public/images/projects/Image.png";
import image2 from "../../public/images/projects/Image-1.png";
import image3 from "../../public/images/projects/Image-2.png";
import connect from "../../public/images/svgs/connected-world.svg";
import { Forum } from '@/components/Card'

const community = () => {
    return (
        <>
            <Head>
                <title>PeduliHijau | Tentang Kami</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <div className='flex items-center justify-between w-full pb-24'>
                    <div className='w-1/2 flex flex-col item-center self-center'>
                        <AnimatedText text="Terhubung dengan sesama" className='!text-6xl !text-left'/>
                        <p className='my-4 text-base font-medium'>
                        Dengan saling terhubung, kita bisa berbagi ide, pengetahuan, dan tindakan nyata. 
                        Setiap langkah kecil kita memiliki dampak besar. Bersama-sama, kita dapat menciptakan 
                        perubahan positif dan memberikan warisan lingkungan yang lestari bagi generasi mendatang. 
                        </p>
                    </div>
                    <div className='w-2/5'>
                        <Image src={connect} alt="Connected World" className='w-full h-auto' />
                    </div>
                </div>
                    <div className='grid grid-cols-8 gap-8 pt-16'>
                        <div className='col-span-6 space-y-8'>
                            <Forum
                                title="Judul Forum Satu"
                                img={image1}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor."
                                link="/"
                                user="PeduliHijau"
                                date="29 Desember 2023"
                            />
                            <Forum
                                title="Judul Forum Satu"
                                img={image1}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor."
                                link="/"
                                user="PeduliHijau"
                                date="29 Desember 2023"
                            />
                            <Forum
                                title="Judul Forum Satu"
                                img={image1}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor."
                                link="/"
                                user="PeduliHijau"
                                date="29 Desember 2023"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default community