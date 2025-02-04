import React from 'react'

const Navbar = () => {
  return (

    <nav className="navbar sticky top-0 bg-primary p-8 z-50 bg-opacity-80">
      <div>
        <a className='text-2xl font-black text-black' href="#home">Dounya Bourhani</a>
      </div>
      <div className='flex-1 items-center justify-end gap-10 text-lg'>
      <a href='#home' className='font-black text-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>About me</a>
      <a href='#projects' className='font-black text-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Projects</a>
      <a href='#skills' className='font-black text-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Skills</a>
      <a href='#contact' className='font-black text-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Contact me!</a>
      </div>
    </nav>

  )
}

export default Navbar