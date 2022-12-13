import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function BaseNav() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed py-2 px-5 z-50 w-4/5 mx-auto bg-slate-800 top-2 left-0 right-0 text-center rounded-full">

            <div className="flex justify-between items-center">
                <a href='#home' className="text-2xl md:text-3xl font-extrabold text-primary hover:underline hover:text-accent cursor-pointer">George Santos</a>
                <div className='flex gap-2 items-center'>
                    <AiOutlineMenu className={`${open ? 'hidden' : ''} lg:hidden w-auto h-6 fill-primary cursor-pointer`} onClick={() => setOpen(!open)} />
                    <ul className={`${open ? 'flex flex-col' : 'hidden'} lg:flex lg:flex-row gap-2`}>
                        <li className='lg:px-4 lg:py-3 text-sm bg-primary text-black font-bold rounded-3xl hover:bg-black hover:text-primary cursor-pointer'>
                            <a href="#intro" className='block'>Introduction</a>
                        </li>
                        <li className='px-4 lg:px-2 lg:py-3 text-sm bg-primary text-black font-bold rounded-3xl hover:bg-black hover:text-primary cursor-pointer'>
                            <a href="#about">About</a>
                        </li>
                        <li className='lg:px-4 lg:py-3 text-sm bg-primary text-black font-bold rounded-3xl hover:bg-black hover:text-primary cursor-pointer'>
                            <a href="#skill">Skills</a>
                        </li>
                        <li className='px-4 lg:px-2 lg:py-3 text-sm bg-primary text-black font-bold rounded-3xl hover:bg-black hover:text-primary cursor-pointer'>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                    <AiOutlineClose className={`${open ? '' : 'hidden'} lg:hidden w-auto h-6 fill-primary cursor-pointer`} onClick={() => setOpen(!open)} />
                </div>

            </div>
        </nav>
    )
}
