import { motion } from "framer-motion";
import { fade_out } from "../utils/variants";
//
export default function Introduction() {
    return (
        <section aria-label="introduction" id="intro"
            className="flex items-center flex-col flex-wrap gap-8 justify-center max-w-5xl mx-auto min-h-screen">
            <h1 className="text-3xl text-primary font-extrabold underline">About Me</h1>
            <div className="grid lg:grid-cols-1 p-2 lg:gap-0 items-center">
                <motion.p
                    initial="hidden"
                    whileInView={"visible"}
                    variants={fade_out}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-light text-lg lg:text-3xl text-center px-4">
                    hello! I am a computer engineering undergrad at 📚 UNIRUY<br /><br />
                    my interests are in chatbot development 🤖, fullstack deployment 🖥️, and microservices 🔬<br /><br />
                    other hobbies include video games, piano & music, working out in the gym, 3D printing and virtual streamers<br /><br />
                </motion.p>
            </div>
        </section>)
}
