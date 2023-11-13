// import react from 'react'
import Amico from '../assets/images/amico.svg'

const Home = () => {
    return (
        <div name='home' className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Amico} alt="who.svg" className='[500px] mx-auto hover:scale-75 ease-in duration-500' />
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-7xl sm:text-3xl text-2xl font-bold py-2'>Who am I ?</h1>
                    <p>
                        I am a self-taught, motivated developer. Who is adaptable at any environment put in.
                        A quick learner, a team-work player and never missing an oportunity on getting my hands
                        covered on new technologies in this field.                        
                    </p>
                    {/* <button></button> */}
                </div>
            </div>            
        </div>
    );
}

export default Home;