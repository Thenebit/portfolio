import Campvent from '../assets/images/campventt.png'
import Counter from '../assets/images/counterr.png'
import Vet from '../assets/images/vett.png'
import Port from '../assets/images/portfoliod.png'

const Projects = () => {
    const items = [
        {
          id: 1,
          src: Counter,
          // link: 'Will add link in update',
        },
        {
          id: 2,
          src: Vet,         
        },
        {
          id: 3,
          src: Port,
          
        },
        {
          id: 4,
          src: Campvent,          
        },
      ];
      return (
        <>
          <div
            name='projects'
            className='bg-[#000300] w-full text-white md:h-screen text-center md:text-left'
          >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                <p className='flex justify-center text-4xl font-bold  text-gray-300'>
                    Projects
                </p>                
              </div>
    
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
                {items.map(({ id, src }) => (
                  <div
                    key={id}
                    className='shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-white'
                  >
                    <img
                      src={src}
                      alt=''
                      className='rounded-md duration-200 hover:scale-105 w-full h-48 object-contain'
                    />
                    {/* <div className='flex items-center justify-center'>
                      <button disabled
                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-[#00df9a]'
                        onClick={() => window.open(link, '_blank')}
                      >
                        View Website
                      </button>
                      <button
                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-[#c54fb1]'
                        onClick={() => window.open(link, '_blank')}
                      >
                        Github Rep
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
    );
}

export default Projects;