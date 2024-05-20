import Layout from "@/components/Layout";
import Head from "next/head";
import { ArticleContent } from "@/components/ArticleContent";
import profile from "../../public/images/profile/profile-icon.png"
import article1 from "../../public/images/projects/Image-1.png"

const article = () => {
    return (
        <>
            <Head>
                <title>PeduliHijau | Artikel</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <ArticleContent
                        // img={article1}
                        title="Sustainable Living: Langkah-langkah Praktis untuk Merawat Lingkungan Sehari-hari"
                        date="24 Desember 2023"
                        time="9 menit baca"
                        user="PeduliHijau"
                        profile={article1}
                        text="Dalam era modern ini, perhatian terhadap kesehatan lingkungan semakin meningkat, 
                        dan banyak orang mencari cara untuk mengadopsi gaya hidup berkelanjutan. Sustainable living 
                        bukan hanya tentang pengurangan dampak negatif terhadap bumi, tetapi juga menciptakan 
                        perubahan positif melalui keputusan sehari-hari. Berikut adalah langkah-langkah praktis 
                        yang dapat Anda terapkan untuk merawat lingkungan sehari-hari:
                        
                        1. Reduksi Limbah
                        2. Hemat Energi
                        3. Konsumsi Berkelanjutan
                        4. Penggunaan Air yang Bijak
                        5. Mobilitas Ramah Lingkungan
                        "
                    />
                </Layout>
            </main>
        </>
    )
}

export default article
