import React from 'react'

const Navbar = () => {
  return (

    <nav className="navbar bg-primary p-8 rounded-box">
      <div>
        <a className='text-xl' href="#home">Dounya Bourhani</a>
      </div>
      <div className='flex-1 items-center justify-end gap-10 text-sm'>
      <a href='#about'>About me</a>
      <a href='#projects'>Projects</a>
      <a href='#skills'>Skills</a>
      <a href='#contact'>Contact me!</a>
      </div>
    </nav>

  )
}

export default Navbar