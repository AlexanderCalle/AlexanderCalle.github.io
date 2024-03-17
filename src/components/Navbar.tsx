
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 flex w-full items-end px-20 py-5 justify-between bg-deep-dark'>
      <h1 id='home' className="text-white">Alexander Callebaut</h1>
      <div className="flex gap-14 text-dark-gray">
        <a href="#home">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <button className="py-1 px-4 bg-deep-purple-400 text-white hover:bg-deep-purple-800 rounded">Contact</button>
      </div>
    </div>
  )
}

export default Navbar