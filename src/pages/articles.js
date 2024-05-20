import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import article1 from "../../public/images/projects/Image-1.png"
import article2 from "../../public/images/projects/Image-2.png"
import article3 from "../../public/images/projects/Image-3.png"
import article4 from "../../public/images/projects/Image-4.png"
import article5 from "../../public/images/projects/Image.png"
import { FeaturedArticle, Article } from '@/components/Card'

const articles = () => {
    return (
        <>
            <Head>
                <title>PeduliHijau | Artikel</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Tambah Ilmumu Tentang Lingkungan!" className='mb-16'/>
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle 
                            title="Sustainable Living: Langkah-langkah Praktis untuk Merawat Lingkungan Sehari-hari"
                            summary="Dari pengurangan limbah plastik hingga pilihan makanan berkelanjutan, pembaca akan 
                            diberikan wawasan yang mendalam tentang bagaimana setiap individu dapat berkontribusi secara 
                            positif terhadap kesehatan planet kita."
                            time="9 min"
                            link="/article"
                            img={article1}
                        />
                        <FeaturedArticle 
                            title="Menelusuri Jejak Karbon: Peningkatan Kesadaran Terhadap Emisi dan Penanggulangan Perubahan Iklim"
                            summary="Artikel ini membahas konsep jejak karbon, dari pengertian hingga pengukuran, dan 
                            menyoroti dampak emisi gas rumah kaca terhadap lingkungan. Pembaca akan diarahkan untuk memahami 
                            sumber-sumber utama emisi dan langkah-langkah praktis untuk mengurangi jejak karbon pribadi mereka."
                            time="9 min"
                            link="/"
                            img={article2}
                        />
                        
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Semua Artikel</h2>
                    <ul>
                        <Article 
                            title="Mengembalikan Keindahan Alam: Strategi Inovatif dalam Pelestarian Lingkungan"
                            date="21 Des 2023"
                            link="/"
                            img={article4}
                        />
                        <Article 
                            title="Mengatasi Krisis Limbah Plastik: Langkah-langkah Menciptakan Dunia Bebas Sampah Plastik"
                            date="15 Nov 2023"
                            link="/"
                            img={article1}
                        />
                        <Article 
                            title="Teknologi Hijau: Solusi Inovatif untuk Tantangan Lingkungan"
                            date="30 Okt 2023"
                            link="/"
                            img={article5}
                        />
                        <Article 
                            title="Bisnis Berkelanjutan: Strategi Masa Depan untuk Mewujudkan Lingkungan yang Lebih Baik"
                            date="9 Sep 2023"
                            link="/"
                            img={article3}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles