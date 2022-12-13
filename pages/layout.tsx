import Navbar from '../components/basenav'

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
        </>
    )
}