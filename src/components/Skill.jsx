import {
    FaJs,
    FaLaravel,
    FaReact,
    FaPhp,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaJava,
} from 'react-icons/fa'

const Skill = () => {
    return (
    <div name='skills' className='text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* <div className='text-white'>
            <h1 className='w-full text-4xl font-bold p-2'>Tech Skills</h1>
            <div className='grid grid-cols-3 gap-3'>
            <div><FaLaravel size={30} /></div>
            <div><FaJs size={30}/></div>
            <div><FaReact size={30} /></div>
            <div><FaPhp size={30} /></div>
            <div><FaBootstrap size={30} /></div>
            <div><FaHtml5 size={30} /></div>
            <div><FaCss3Alt size={30} /></div>
            <div><FaSass size={30} /></div>
            </div>
        </div> */}

        <div className='flex items-center justify-center'>
            <p className='text-4xl font-bold '>Skills</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaHtml5 size={50} className='w-20 mx-auto' />
                <p className='py-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaCss3Alt size={50} className='w-20 mx-auto' />
                <p className='py-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaJs size={50} className='w-20 mx-auto' />
                <p className='py-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaLaravel size={50} className='w-20 mx-auto' />
                <p className='py-4'>Laravel</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaReact size={50} className='w-20 mx-auto' />
                <p className='py-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaBootstrap size={50} className='w-20 mx-auto' />
                <p className='py-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaPhp size={50} className='w-20 mx-auto' />
                <p className='py-4'>PHP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaSass size={50} className='w-20 mx-auto' />
                <p className='py-4'>Sass</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaJava size={50} className='w-20 mx-auto' />
                <p className='py-4'>Java</p>
            </div>
        </div>
    </div>
    </div>

    );
}

export default Skill;