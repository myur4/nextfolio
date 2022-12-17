
import { motion } from 'framer-motion';
import { zoom_in } from '../utils/variants';
import face from '../public/img/myface.jpg';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about"
            className="flex items-center flex-col flex-wrap justify-center max-w-5xl m-auto min-h-screen">
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={zoom_in}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-2 lg:gap-4 text-center items-center">
                <Image src={face} className="max-w-xs border-2 p-2 rounded-full m-auto" alt="" />
                <div>
                    <span className="text-secondary font-bold text-lg">FULL NAME</span>
                    <p className="text-primary font-bold text-md uppercase">George Santos de Jesus Santiago</p>
                </div>
                <div>
                    <span className="text-secondary font-bold text-lg">BIRTH</span>
                    <p className="text-primary font-bold text-md uppercase">03 September 2001</p>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-secondary font-bold text-lg">STATUS</span>
                    <span className="px-2 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-primary text-white rounded-full shadow-xl">Looking for a Job</span>
                </div>
                <div>
                    <span className="text-secondary font-bold text-lg">CONTACT</span>
                    <p className="text-accent font-bold text-md uppercase">hello@myura.dev</p>
                </div>
                <div>
                    <span className="text-secondary font-bold text-lg">LOCATION</span>
                    <p className="text-accent font-bold text-md uppercase">🏖️ Camaçari-BA</p>
                </div>
            </motion.div>

        </section>)
}
