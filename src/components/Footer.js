import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 
        font-medium text-lg dark:text-light
        '>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                Dibangun oleh <Link href="/"
                > pedulihijau@gmail.com</Link>
                </div>
                <Link href="/" target={"_blank"} 
                >Kontak Kami</Link>
            </Layout>
        </footer>
    )
}

export default Footer