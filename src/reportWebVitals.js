import React from 'react'

const reportWebVitals = () => {
  return (
    <section className="py-10">
        <div className="container mx-auto px-4 text-center">
        <div className='bg-white p-2 px-4 rounded-full items-center justify-center mb-4 mx-auto w-fit'>
      <span className='text-sm text-green-600 font-bold'>How It Works?</span>
      </div> 
          <h2 className="text-3xl font-bold mb-5">Getting Started is easy</h2>
          <p className="text-gray-700 font-bold mb-12">How carboncrunch SAAS works</p>
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
  <div className="flex-1">
    <div className="flex flex-col items-start mb-4">
      <div className="w-36 h-1 bg-green-600"></div>
      <span className="text-green-600 font-bold text-sm">01</span>
    </div>
    <h3 className="text-base font-semibold mb-2 text-green-600 text-left">Track and manage your Net Zero Pathway</h3>
    <p className="text-sm font-medium text-gray-600 text-left">
      Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target y...
    </p>
  </div>

  <div className="flex-1">
    <div className="flex items-center mb-4">
      <span className="text-sm font-bold text-gray-400">02</span>
    </div>
    <h3 className="text-base font-semibold mb-2 text-gray-700 text-left">Track and manage your Net Zero Pathway</h3>
    <p className="text-sm text-gray-600 text-left font-medium">
      Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target y...
    </p>
  </div>

  <div className="flex-1">
    <div className="flex items-center mb-4">
      <span className="text-sm font-bold text-gray-400">03</span>
    </div>
    <h3 className="text-base font-semibold mb-2 text-gray-700 text-left">Track and manage your Net Zero Pathway</h3>
    <p className="text-sm text-gray-600 text-left font-medium">
      Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target y...
    </p>
  </div>
</div>

          <div className="mt-12">
            <img 
              src="https://i.postimg.cc/mknMbh3L/Screenshot-2025-03-21-103031.png" 
              alt="Dashboard" 
              className="mx-auto"
              loading='lazy' 
            />
          </div>
        </div>
      </section>
  )
}

export default reportWebVitals
