import Navbar from '../components/basenav'
import Footer from '../components/footer'

export default function Layout({ children }) {
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