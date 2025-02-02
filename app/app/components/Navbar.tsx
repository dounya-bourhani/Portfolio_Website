import React from 'react'

const Navbar = () => {
  return (

    <nav className="navbar bg-primary p-8 rounded-box sticky top-0 opacity-75">
      <div>
        <a className='text-xl font-black' href="#home">Dounya Bourhani</a>
      </div>
      <div className='flex-1 items-center justify-end gap-10 text-sm'>
      <a href='#home' className='font-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>About me</a>
      <a href='#projects' className='font-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Projects</a>
      <a href='#skills' className='font-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Skills</a>
      <a href='#contact' className='font-black duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-4'>Contact me!</a>
      </div>
    </nav>

  )
}

export default Navbar