import { SiReact, SiVuedotjs, SiGithub, SiNpm, SiNuxtdotjs, SiNextdotjs } from 'react-icons/si';

export default function Projects() {
    return (
        <section id="projects" className="flex items-center flex-col flex-wrap gap-8 justify-center max-w-5xl mx-auto min-h-screen p-4">
            <h1 className='text-4xl font-bold underline text-primary'>My Projects</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:flex-row flex-wrap'>
            <a
            href="https://github.com/myur4/hikaku"
            className='flex flex-col items-center border border-secondary rounded-lg p-4 gap-4 text-center hover:border-primary hover:bg-base-200 cursor-pointer'>
                    <h1 className='text-2xl font-bold text-secondary'>Hikaku</h1>
                    <p>NPM lib to hash and compare images without AI.</p>
                    <div className='flex gap-2 items-center'>
                        <SiNpm className='w-8 h-8 fill-red-400'></SiNpm>
                        <SiGithub className='w-8 h-8 fill-white'></SiGithub>
                    </div>
                </a>
                <a 
                href="https://github.com/myur4/nextfolio"
                className='flex flex-col items-center border border-secondary rounded-lg p-4 gap-4 text-center hover:border-primary hover:bg-base-200 cursor-pointer'>
                    <h1 className='text-2xl font-bold text-secondary'>NextFolio</h1>
                    <p>O website que você está vendo nesse exato momento =)</p>
                    <div className='flex gap-2 items-center'>
                        <SiNextdotjs className='w-8 h-8 fill-green-400'></SiNextdotjs>
                        <SiReact className='w-8 h-8 fill-blue-400'></SiReact>
                        <SiGithub className='w-8 h-8 fill-white'></SiGithub>
                    </div>
                </a>
                <a
                href="https://github.com/myur4/vuefolio"
                className='flex flex-col items-center border border-secondary rounded-lg p-4 gap-4 text-center hover:border-primary hover:bg-base-200 cursor-pointer'>
                    <h1 className='text-2xl font-bold text-secondary'>VueFolio</h1>
                    <p>A simple portifolio template made with Nuxt 3!</p>
                    <div className='flex gap-2 items-center'>
                        <SiVuedotjs className='w-8 h-8 fill-green-400'></SiVuedotjs>
                        <SiNuxtdotjs className='w-8 h-8 fill-green-400'></SiNuxtdotjs>
                        <SiGithub className='w-8 h-8 fill-white'></SiGithub>
                    </div>
                </a>
            </div>
        </section>)
}
