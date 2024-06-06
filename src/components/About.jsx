
const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-custom-bg bg-noise-texture text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 '>
                        <p className='text-4xl font-bold inline border-b-4 border-[#87CEEB]'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Kushal, nice to meet you. Please take a look around. </p>
                    </div>
                    <div>
                        <p>As a visionary Front-End Developer, I bring digital dreams to life with flair and precision. I specialize in creating immersive, user-centric web experiences that are as functional as they are beautiful. Let's transform the ordinary into the extraordinary.</p>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default About;