import Profile from '../assets/images/napaa.jpg'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from'react-icons/si'

const About = () => {
    const connect = 
        [
            {icon: <FaGithub size={20} />, href:"https://github.com/Thenebit"},
            {icon: <SiGmail size={20} />, href:"mailto:napaasamuel5@gmail.com" },
        ]

    return (
        <>
        <div name='about' className='w-full text-white py-16 px-4'>
            <div className='flex items-center justify-center'>
                <p className='text-4xl font-bold p-2 m-4 text-gray-300'>About Me</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:mt-4'>            
                <img src={Profile} 
                alt="who.svg" 
                className='[500px] mx-auto w-[80%] h-[90%] rounded shadow-md shadow-gray-600' 
                />    
                <div className='flex flex-col justify-center'>                    
                    <p className='pt-2 mt-2'>
                        Hello partner<i>!</i><br/>
                        Napaa Samuel is my name. A Full Stack Developer residing in Ghana &#127468;&#127469;. You can say
                        i have always been amazed on how the internet works as a whole but never came across me on how to
                        go by until i found myself reading a book about the evolution of computers and how to instruct them.
                        Understanding the fundamentals has helped me in the years of development as a software developer. I constantly
                        try to dive into and learn on new tech trends.                    
                    </p>
                    <p className='mt-2'>
                        All coding and no play make Jack a dull developer &#129315;. Love movies, boxing, UFC, and good music &#127926;.
                    </p>
                    <p className='mt-2 flex'>
                        Let's linkup: {connect.map((item, index) => (
                            <span key={index} className='px-2'>
                                <a href={item.href} rel="noreferrer" target="_blank">{item.icon}</a>
                            </span>
                        ))}
                    </p>
                    
                </div>            
            </div>  
                      
        </div>
        </>
    );
}
export default About;