import React from 'react'

const Navbar = () => {
  return (
    <nav className=" text-black">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-8 items-center">
          <a href="#home" className="py-4 hover:text-gray-600">Home</a>
          <a href="#portfolio" className="py-4 hover:text-gray-600">Portofolio</a>
          <a href="#pricing" className="py-4 hover:text-gray-600">My experience</a>
        </div>
        
        
        <div className="flex space-x-4 items-center">
          <a href="#about" className="py-4 hover:text-gray-600">About</a>
          <a href="#contact" className="ml-4">
            <button className="bg-black text-white px-6 py-2">Contact</button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar