import React from 'react';
import workImg from '../assets/projects/RR.jpg'
import workImg1 from '../assets/projects/Blog1.jpg'

const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300 section'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#87CEEB]'>Work</p>
                </div>
                {/* container */}
                <div
                    className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${workImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://6654beeb9562770686a8695f--shimmering-profiterole-ce3e76.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/kushalkumarghosh/recipe-radar" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${workImg1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href=" https://6657664ce7f8110d72ef4fcc--illustrious-hamster-e66259.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/kushalkumarghosh/blogsite?tab=readme-ov-file " target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;