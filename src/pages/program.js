import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import program1 from "../../public/images/projects/Image.png";
import program2 from "../../public/images/projects/Image-1.png";
import program3 from "../../public/images/projects/Image-2.png";
import program4 from "../../public/images/projects/Image-3.png";
import { FeaturedProgram, Program } from '@/components/Card'

const program = ({}) => {
    return (
        <>
            <Head>
                <title>PeduliHijau | Program</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Bareng Buat Aksi Nyata" 
                    className='mb-16'
                    />
                    {/* <p className='my-4 mb-16 text-base font-medium text-center px-32'>
                    Kamu bisa mengikuti beberapa program PeduliHijau yang bertujuan untuk memberikan aksi nyata terhadap
                    upaya pelestarian lingkungan. Ayo ikut serta membawa perubahan untuk bumi kita!
                    </p> */}
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeaturedProgram
                                title="Penghijauan Gunung Batur"
                                img={program1}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor."
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>
                        <div className='col-span-6'>
                        <Program 
                                title="Penghijauan Gunung Batur"
                                img={program2}
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>
                        <div className='col-span-6'>
                        <Program 
                                title="Penghijauan Gunung Batur"
                                img={program4}
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProgram
                                title="Bersih-bersih Pantai Jimbaran"
                                img={program3}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor."
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>
                        <div className='col-span-6'>
                        <Program 
                                title="Bersih-bersih Pantai Jimbaran"
                                img={program2}
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>
                        <div className='col-span-6'>
                        <Program 
                                title="Bersih-bersih Pantai Jimbaran"
                                img={program4}
                                link="/"
                                type="Featured Program"
                            
                            />
                        </div>

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default program