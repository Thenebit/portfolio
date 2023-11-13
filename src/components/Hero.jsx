import React from 'react'

const Hero = () => {
    return (
        <div name='home' className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 '>BUILD WITH ME</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>I'm your best shot</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, relaible, efficient</p>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold  pt-1'>Curious about new technologies</p>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold  pt-1'>Just like this portfolio</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;