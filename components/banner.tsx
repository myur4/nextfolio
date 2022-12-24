import myPic from '../public/img/avatar.png';
import Image from 'next/image';
import { GithubIcon, DiscordIcon, SpotifyIcon, SoundcloudIcon, ArrowDownIcon } from '@remixicons/react/fill';
import { SlArrowDown } from 'react-icons/sl'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { fade_out, zoom_in } from '../utils/variants';

const socials = [
    { name: "Github", component: <GithubIcon className="w-12 lg:w-14 fill-white hover:fill-secondary cursor-pointer" />, url: "https://github.com/myur4" },
    { name: "Discord", component: <DiscordIcon className="w-12 lg:w-14 fill-blue-500 hover:fill-secondary cursor-pointer" />, url: "" },
    { name: "SoundCloud", component: <SoundcloudIcon className="w-12 lg:w-14 fill-red-400 hover:fill-secondary hover:border-secondary cursor-pointer border-2 border-red-400 rounded-full" />, url: "https://soundcloud.com/von-zodd" },
    { name: "Spotify", component: <SpotifyIcon className="w-12 lg:w-14 fill-green-400 hover:fill-secondary cursor-pointer" />, url: "" },
]

export default function Banner() {
    return (
        <section id="home" aria-label="introduction banner with socials">
            <div className="min-h-screen max-w-fit m-auto flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex flex-col justify-center items-center gap-8">
                    <span className="text-6xl font-extrabold text-primary">
                        <Typewriter
                            loop={true}
                            words={["Fullstack", "React", ".NET", "Passionate"]}
                            cursor
                            cursorStyle="|"
                            delaySpeed={1500}
                        />
                    </span>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.75 }}>
                        <Image src="https://avatars.githubusercontent.com/u/47012804?v=4" alt="cute illustration" width="350" height="70" className='rounded-full border border-primary p-2 animate-[spin_1.5s]'/>
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl text-primary font-extrabold">Developer</h1>
                </div>

                <motion.ul
                    className="flex md:flex-col gap-4 items-center p-0 m-0"
                    variants={zoom_in}
                    initial="hidden"
                    animate="visible"
                >

                    {
                        socials.map((value, key) => (
                            <motion.li key={key} variants={fade_out} className="tooltip tooltip-right lg:tooltip-right font-bold" data-tip={value.name}>
                                <a href={value.url}>{value.component}</a>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
        </section>)
}
