import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SkillsList from "./components/SkillsList"
import TimeLine from "./components/TimeLine"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="py-10 px-20 flex divide-x-2">
        <div className="w-3/5 pr-10">
          <h1>Who am I?</h1>
          <div className="mt-5 flex gap-5 items-center">
            <img src="" alt="" className="w-1/3 aspect-square bg-dark-gray" />
            <p className="w-2/3">A passionate and driven software developer with a solid foundation in programming and an open mind to learn even more. I have some experience in developing an own project at Ardis, alongside with almost three years of managing finances and coordination of the main operations at my youth association. Even more, I developed several projects to learn more about the technologies that the world has to offer.</p>
          </div>
        </div>
        <SkillsList />
      </div>
      <TimeLine />
      <div className="py-10 px-20 mx-auto flex flex-col items-center">
        <h1>Projects</h1>
        <div className="mt-10 w-2/3 grid grid-cols-3 grid-flow-row gap-4">
          <div className="col-span-2 bg-deep-purple-400">HomeCloud</div>
          <div className="aspect-square bg-off-white">Pictureview</div>
          <div className="row-span-2 bg-off-white">Akimbo</div>
          <div className="aspect-square bg-off-white">Python</div>
          <div className="bg-off-white">Clipboard</div>
          <div className="h-80 col-span-2 bg-deep-purple-400">Rooyghem</div>
        </div>
      </div>
    </>
  )
}

export default App
