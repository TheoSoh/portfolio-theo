import NavMenu from './components/NavMenu.jsx'
import Hero from './sections/Hero.jsx'

function App() {

  return (
    <>
      <NavMenu />
      <div className='flex justify-center py-28 px-[15%] md:px-[10%] w-full text-graphite'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[84.575rem]">
          <div className='w-full h-fit mb-16'>
            <Hero />
          </div>
          <div className='flex flex-col w-full relative gap-16 md:gap-20 lg:gap-28'>

          </div>
        </div>
      </div>
    </>
  );
}

export default App
