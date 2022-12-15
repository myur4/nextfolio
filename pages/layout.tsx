import { ReactNode } from 'react'
import Navbar from '../components/basenav'
import Footer from '../components/footer'

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}