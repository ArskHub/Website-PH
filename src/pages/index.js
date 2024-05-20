import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/Logo.png';
import ilust from '../../public/images/profile/Leaf.png'
import world from '../../public/images/svgs/theWorld.svg'
import program1 from "../../public/images/projects/Image-2.png";
import program2 from "../../public/images/projects/Image.png";
import program3 from "../../public/images/projects/Image-3.png";
import question from "../../public/images/svgs/question.svg";
import AnimatedText from '@/components/AnimatedText';
import { Program } from '@/components/Card';
import { Primary, Secondary } from '@/components/Button';

const Mission = ({title, summary}) => {
  return (
      <div className='w-full flex flex-col items-start justify-between mr-2'>
          <Image src={ilust} alt='Leaf' className='w-1/3 h-auto mb-2'/>
          <h2 className='my-2 w-full text-left text-xl font-bold'>{title}</h2>
          <p className='my-2 font-regular text-dark/75 text-s'>{summary}</p>
      </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>PeduliHijau | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=' items-center text-dark w-full min-h-screen'>
        {/* Hero Section */}
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-2/5'>
              <Image src={profilePic} alt="Photo Profile" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col item-center self-center'>
              <AnimatedText text="Komunitas PeduliHijau." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              Selamat datang di website Peduli Hiijau! Kami adalah komunitas yang berdedikasi untuk meningkatkan 
              kesadaran dan mengambil tindakan positif terhadap isu-isu lingkungan dan keberlanjutan. Dengan 
              semangat yang sama, kami berupaya memberikan dampak positif dalam melestarikan dan memelihara planet bumi tercinta.
              </p>
              <Primary
                link="/"
                title="Jelajahi"
              />
            </div>
          </div>
        </Layout>
        {/* End of Hero Section */}
        {/* Misi Section */}
        <Layout className='!bg-primary/10'>
            <div className='grid grid-cols-12 gap-12'>
                {/* <div className='col-span-12'>
                    <AnimatedText text="Misi Kami" className='!text-6xl'/>
                </div> */}
                <div className='col-span-3'>
                    <Mission 
                        title="Pendidikan Lingkungan"
                        summary="Memberikan pengetahuan dan pemahaman tentang isu-isu lingkungan kepada masyarakat."
                    />
                </div>
                <div className='col-span-3'>
                    <Mission 
                        title="Aksi Lingkungan"
                        summary="Mengorganisir acara yang bertujuan untuk membersihkan, merawat, dan melestarikan lingkungan kami."
                    />
                </div>
                <div className='col-span-3'>
                    <Mission 
                        title="Mendorong Perubahan"
                        summary="Mendorong pemerintah, bisnis, dan masyarakat untuk mengambil tindakan nyata untuk pelestarian lingkungan."
                    />
                </div>
                <div className='col-span-3'>
                    <Mission 
                        title="Komunitas yang Kuat"
                        summary="Membangun komunitas yang berbagi nilai-nilai lingkungan, berkolaborasi, dan mendukung satu sama lain."
                    />
                </div>
            </div>
            </Layout>
            {/* End of Misi Section */}
            {/* Info Section */}
            <Layout>
            <div className="grid w-full grid-cols-12 gap-16">
              <div className='col-span-6 flex flex-col items-start justify-start'>
                <div>
                  <AnimatedText text="Tentang Kami" className='!text-6xl !text-left'/>
                  <p className='my-4 text-base font-medium'>
                  PeduliHijau bertujuan untuk menciptakan dunia yang lebih hijau, berkelanjutan, dan peduli 
                  terhadap lingkungan. Kami berkomitmen untuk menjadi agen perubahan dalam 
                  upaya melestarikan planet kita, serta mengedukasi dan menginspirasi orang 
                  untuk hidup secara lebih berkelanjutan.
                  </p>
                </div>
                <div className="grid w-full grid-cols-3 gap-16">
                  <div className='col-span-1 items-start justify-center'>
                    <AnimatedText text="1500+" className='!text-4xl !text-left'/>
                    <h2 className='text-l font-medium capitalize text-dark/75'>Pengguna</h2>
                  </div>
                  <div className='col-span-1 items-start justify-center'>
                    <AnimatedText text="500+" className='!text-4xl !text-left'/>
                    <h2 className='text-l font-medium capitalize text-dark/75'>Komunitas</h2>
                  </div>
                  <div className='col-span-1 items-start justify-center'>
                    <AnimatedText text="40+" className='!text-4xl !text-left'/>
                    <h2 className='text-l font-medium capitalize text-dark/75'>Program</h2>
                  </div>
                </div>
            </div>
              <div className='col-span-6 flex flex-col items-end justify-end'>
                <Image src={world} alt="Photo Profile" className='w-full h-auto' style={{ transform: 'scaleX(-1)' }}/>
              </div>
            </div>
            </Layout>
            {/* End of Info Section */}
            {/* Program Section */}
            <Layout className='pt-16'>
              <AnimatedText text='Program Kami' className='!text-6xl pb-6'/>
              <div className='grid grid-cols-12 gap-12'>
                <div className='col-span-4'>
                  <Program
                    title="Penghijauan Gunung Batur"
                    img={program1}
                    link="/"
                    type="Program Unggulan"
                  />
                </div>
                <div className='col-span-4'>
                  <Program
                    title="Penghijauan Gunung Batur"
                    img={program2}
                    link="/"
                    type="Program Unggulan"
                  />
                </div>
                <div className='col-span-4'>
                  <Program
                    title="Penghijauan Gunung Batur"
                    img={program3}
                    link="/"
                    type="Program Unggulan"
                  />
                </div>
                <div className='col-span-12 flex justify-center'>
                  <Primary
                  link="/program"
                  title="Lainnya"
                  />
                </div>
              </div>
            </Layout>
            {/* End of Program Section */}
            {/* Quotes Section */}
            <Layout className='!bg-primary/10'>
              <p className='text-4xl font-medium font-serif text-center'>
              "Alam tidak butuh kata-kata mutiara.<br/>Alam butuh aksi nyata."
              </p>
            </Layout>
            {/* FAQ Section */}
            <Layout className='pt-16'>
              <div className='flex items-center justify-between w-full'>
                <div className='w-2/5'>
                  <Image src={question} alt="Photo Profile" className='w-full h-auto' />
                </div>
                <div className='w-1/2 flex flex-col item-center self-center'>
                  <AnimatedText text="Ada Pertanyaan?" className='!text-6xl !text-left'/>
                  <p className='my-4 text-base font-medium'>
                  Jika kamu memiliki pertanyaan tentang komunitas kami, kamu dapat menghubungi kami
                  melalui kontak di bawah ini. Kami akan senantiasa membantumu. Ingat, siapa yang malu 
                  bertanya akan sesat di jalan. Feel free to ask!
                  </p>
                  <div className='flex items-center justify-start space-x-2'>
                  <Primary
                    link="/"
                    title="Kontak"
                  />
                  </div>
                </div>
              </div>
            </Layout>

      </main>
    </>
  )
}
