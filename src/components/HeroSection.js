import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative text-center">
        <img 
          src="https://i.postimg.cc/QtfbnJzy/Screenshot-2025-03-21-100435.png" 
          alt="Hero Image" 
          className="absolute rounded-3xl inset-0 object-cover opacity-50 w-full h-[400px] md:h-[450px] lg:w-[1100px] lg:h-[450px] lg:top-[70px] lg:left-[200px]"
          loading='lazy' 
        />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-12">GHG Accounting</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">Scope 1, Scope 2, Scope 3</h2>
          <p className="text-sm md:text-base font-semibold text-gray-800 mt-6">
            Track, minimize, offset, and report your carbon emissions effortlessly
            <br className="hidden md:block" />To drive faster decarbonization progress
          </p>
        </div>
      </section>
  )
}

export default HeroSection
