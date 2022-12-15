import { GrPersonalComputer } from 'react-icons/gr'
import { AddBoxIcon } from '@remixicons/react/fill'

export default function Footer() {
    return (
        <section
            aria-label='footer'>
            <footer className="footer footer-center p-4 text-primary-content flex items-center justify-center">
                <AddBoxIcon className='fill-secondary w-12'/>
                    <p className="font-bold text-primary">
                        George Santos - Providing code since 2001
                    </p>
            </footer>
        </section>
    )
};