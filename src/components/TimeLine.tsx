
const TimeLine = () => {
  return (
    <div className="bg-deep-dark flex flex-col items-center justify-center px-20 py-10 gap-5">
        <h1 className="text-white">Timeline</h1>
        <div className="flex">
          <div className="z-10">
            <div className="mt-52 w-[500px] h-40 bg-off-white shadow-off-white/15 shadow-lg rounded-lg flex flex-col items-end p-4 gap-2">
              <p className="py-1 px-4 rounded bg-deep-purple-400/15 text-deep-purple-400 font-medium">March 2024</p>
              <h2 className="text-xl font-bold">Flamish Programming Competition</h2>
              <p>Antwerp, BE</p>
            </div>
            <div className="mt-72 w-[500px] h-40 bg-off-white shadow-off-white/15 shadow-lg rounded-lg flex flex-col items-end p-4 gap-2">
              <p className="py-1 px-4 rounded bg-deep-purple-400/15 text-deep-purple-400 font-medium">March 2023</p>
              <h2 className="text-xl font-bold">Flamish Programming Competition</h2>
              <p>Ghent, BE</p>
            </div>
          </div>
          <img className="aspect-auto w-fit h-fit -ml-5" src="/src/assets/Timeline.svg" alt="timeline" />
          <div>
            <div className="mt-16 w-[500px] h-40 bg-off-white shadow-off-white/15 shadow-lg rounded-lg flex flex-col items-start p-4 gap-2">
              <p className="py-1 px-4 rounded bg-deep-purple-400/15 text-deep-purple-400 font-medium">2022 - Present</p>
              <h2 className="text-xl font-bold">Bachelor of Science (B.S.) Applied Computer Science</h2>
              <p>University College Ghent, Ghent, BE</p>
            </div>
            <div className="abso mt-32 w-[500px] h-40 bg-off-white shadow-off-white/15 shadow-lg rounded-lg flex flex-col items-start p-4 gap-2">
              <p className="py-1 px-4 rounded bg-deep-purple-400/15 text-deep-purple-400 font-medium">2022 - Present</p>
              <h2 className="text-xl font-bold">Group treasurer, responsible for main operations</h2>
              <p>KSA Rooyghem, Bruges, BE</p>
            </div>
            <div className="abso mt-36 w-[500px] h-40 bg-off-white shadow-off-white/15 shadow-lg rounded-lg flex flex-col items-start p-4 gap-2">
              <p className="py-1 px-4 rounded bg-deep-purple-400/15 text-deep-purple-400 font-medium">July 2023 - August 2023</p>
              <h2 className="text-xl font-bold">Software developer, Ardis, Aalter, BE</h2>
              <p>Responsible for developing a project, automatization of translating source code</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TimeLine