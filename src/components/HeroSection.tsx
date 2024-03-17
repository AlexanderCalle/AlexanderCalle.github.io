
const HeroSection = () => {
  return (
    <div className="h-screen bg-deep-dark flex flex-col items-center justify-center">
      <div className="flex items-center">
        <img src="/src/assets/HeroImage.svg" alt="Hero image" />
        <div>
          <h2 className="text-[4em] font-bold text-white"><span className="text-deep-purple-400">Software</span> developer</h2>
          <h2 className="ml-20 text-[4em] font-bold text-white">brewed at young age</h2>
        </div>
      </div>
      <div className="mt-10 flex gap-4">
        <button className="py-1 px-4 bg-deep-purple-400 text-white rounded hover:bg-deep-purple-800">Contact</button>
        <button className="py-1 px-4 rounded border border-white text-white hover:bg-dark-gray/10">Projects</button>
      </div>
    </div>
  )
}

export default HeroSection