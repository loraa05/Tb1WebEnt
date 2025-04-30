import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-gray-500 text-sm mb-2">Hello! I'M</p>
        <h1 className="text-5xl font-extrabold text-black mb-4">Laura Anggreini</h1>
        <p className="text-xl text-gray-700 font-medium mb-6">Aspiring Data Analyst</p>
        <p className="text-gray-600 mb-6">
          Passionate about turning data into valuable insights and continuously growing through real-world projects.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Hire Me</button>
          <button className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition">Download CV</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={HeroImage}
          alt="Laura Anggreini"
          className="w-[300px] h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero
