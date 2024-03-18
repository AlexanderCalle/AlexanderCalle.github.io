import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SkillsList from "./components/SkillsList"
import TimeLine from "./components/TimeLine"
import InfoHomecloud from './assets/InfoHomecloud.jpeg'
import InfoAkimbo from './assets/InfoAkimbo.png'
import ProfileImage from "./assets/ProfileImage.jpg"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="py-10 px-20 flex divide-x-2">
        <div className="w-3/5 pr-10">
          <h1>Who am I?</h1>
          <div className="mt-5 flex gap-5 items-center">
            <img src={ProfileImage} alt="" className="w-1/3 aspect-square bg-dark-gray object-cover scale rounded-lg" />
            <p className="w-2/3">A passionate and driven software developer with a solid foundation in programming and an open mind to learn even more. I have some experience in developing an own project at Ardis, alongside with almost three years of managing finances and coordination of the main operations at my youth association. Even more, I developed several projects to learn more about the technologies that the world has to offer.</p>
          </div>
        </div>
        <SkillsList />
      </div>
      <TimeLine />
      <div className="py-10 px-20 mx-auto flex flex-col items-center">
        <h1>Projects</h1>
        <div className="mt-10 w-2/3 grid grid-cols-3 grid-flow-row gap-6">
          <div className="col-span-2 bg-deep-purple-400 rounded-xl text-white shadow-xl flex justify-between h-full">
            <div className="p-3 flex flex-col justify-between">
              <div className="flex gap-3">
                <a className="group" href="https://homecloud.netlify.app" target="_blank" rel="noopener noreferrer">
                  <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                    Preview
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </a>
                <a className="group" href="https://github.com/AlexanderCalle/HomeCloud" target="_blank" rel="noopener noreferrer">
                  <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                    Code
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                </a>
              </div>
              <p>
                A open soruce file system that acts like a cloud storage but is installed locally. This creates a safe fealing and the privacy of data is certain.
                <br />(the preview is an old version, currently working on new version)
              </p>
              <h2 className="text-5xl font-black">HomeCloud</h2>
            </div>
            <img className="w-96 object-cover rounded-r-xl" src={InfoHomecloud} alt="Info image HomeCloud project" />
          </div>
          <div className="aspect-square bg-off-white rounded-xl p-6 shadow-xl flex flex-col gap-5">
            <div className="flex gap-3">
              <a className="group" href="https://github.com/AlexanderCalle/Picture" target="_blank" rel="noopener noreferrer">
                <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                  Code
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              </a>
            </div>
            <div className="flex-grow flex flex-col justify-between">
              <h2 className="mt-10 font-medium text-2xl">PictureView App</h2>
              <p>
                A project to learn about Flutter.
                <br /><br />
                On this app you can store images and view them like tinder app.
              </p>
            </div>
          </div>
          <div className="row-span-2 bg-off-white rounded-xl shadow-xl flex flex-col">
            <div className="flex-grow p-3 flex flex-col">
              <div>
                <a className="group" href="https://akimbo-blog.netlify.app" target="_blank" rel="noopener noreferrer">
                  <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                    Preview
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </a>
              </div>
              <div className="flex-grow mt-6 text-center flex flex-col items-center justify-center gap-5">
                <h2 className="font-bold text-5xl">Akimbo</h2>
                <p className="font-medium">Site about the ABC of Art, Books & Culture</p>
                <p className="mt-10">Blog site for Art history student that are interrested to share there view of things, review book and so on</p>
              </div>
            </div>
            <img className="h-80 object-cover rounded-b-xl" src={InfoAkimbo} alt="Info image about Akimbo project" />
          </div>
          <div className="aspect-square bg-off-white rounded-xl p-3 shadow-xl flex flex-col justify-between">
            <div className="flex gap-3">
              <a className="group" href="https://github.com/AlexanderCalle/yt-python-download-search" target="_blank" rel="noopener noreferrer">
                <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                  Code
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              </a>
            </div>
            <h2 className="font-bold text-2xl text-center">Python Youtube search and download</h2>
            <div className="text-center flex flex-col gap-5">
              <p className="font-semibold">A python project to learn using API's</p>
              <p>search for any song or playlist and then download the music/video</p>
            </div>
          </div>
          <div className="bg-off-white rounded-xl shadow-xl flex flex-col">
            <div className="w-36 p-3 aspect-square bg-deep-purple-400/10 after:blur-sm rounded-tl-xl rounded-br-3xl">
              <a className="group blur-none" href="https://github.com/AlexanderCalle/clipboard" target="_blank" rel="noopener noreferrer">
                  <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                    Code
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                </a>
            </div>
            <div className="p-10 flex-grow flex flex-col justify-end text-end gap-5">
              <p>Note system for family
                <br />
                simple and minimal
              </p>
              <h2 className="font-bold text-3xl">Clipboard</h2>
            </div>
          </div>
          <div className="h-80 col-span-2 bg-deep-purple-400 rounded-xl p-3 text-white shadow-xl flex flex-col gap-5">
            <div>
              <a className="group" href="https://www.ksarooyghem.be" target="_blank" rel="noopener noreferrer">
                <div className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute z-10 -ml-5 -mt-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                  Preview
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </a>
            </div>
            <div className="flex-grow flex flex-col justify-around">
              <h2 className="font-black text-5xl">KSA Rooyghem
              <br />website</h2>
              <p>Website for my youth association, for planning activities, share news, 
                show info and all participants</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
