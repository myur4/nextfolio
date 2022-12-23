import { SiDotnet, SiReact, SiVuedotjs, SiTypescript, SiCsharp, SiRubygems, SiGoland } from 'react-icons/si';

export default function Skills() {
    return (
        <section id="skill" className="flex items-center flex-col flex-wrap gap-8 justify-center max-w-5xl mx-auto min-h-screen">

            <h1 className="text-3xl lg:text-5xl text-primary font-extrabold underline">Skills</h1>
            <div className='flex gap-2 flex-wrap'>
            <span className='badge-secondary badge-sm lg:badge-lg rounded-full'>Fast Learner</span>
            <span className='badge-secondary badge-sm lg:badge-lg rounded-full'>Good Companion</span>
            <span className='badge-secondary badge-sm lg:badge-lg rounded-full'>Problem Solver</span>
            </div>

            <div className='flex flex-col gap-4 flex-wrap'>
                <h1 className='text-2xl lg:text-3xl text-center text-secondary font-extrabold'>Programming Languages</h1>
                <div className='flex gap-4 flex-wrap justify-center items-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <SiCsharp className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-purple-300' />
                        <h1 className='text-xl font-bold'>C#</h1>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <SiGoland className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-blue-300'/>
                        <h1 className='text-xl font-bold'>Golang</h1>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <SiTypescript className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-blue-400' />
                        <h1 className='text-xl font-bold'>TS</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl lg:text-3xl text-center text-secondary font-extrabold'>Frameworks</h1>
                    <div className='flex gap-4 flex-wrap justify-center'>
                        <div className='flex flex-col gap-2 items-center'>
                            <SiReact className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-blue-300' />
                            <h1 className='text-xl font-bold'>React.JS</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <SiVuedotjs className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-green-400' />
                            <h1 className='text-xl font-bold'>Vue.JS</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <SiDotnet className='w-auto h-16 lg:h-36 border-2 rounded-full p-4 fill-purple-400' />
                            <h1 className='text-xl font-bold'>Dotnet</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
''