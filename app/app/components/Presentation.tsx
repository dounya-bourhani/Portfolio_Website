import React from 'react'
import Image from 'next/image'

const Presentation = () => {
  return (
    <section id='home' className='prose prose-lg !max-w-none flex flex-col items-center justify-center p-10'>
        <h1>Hi, I'm Dounya</h1>
        <div>
          <Image src='/dounya.jpeg' alt='headhsot' width={300} height={300} className='rounded-full border shadow-2xl'/>
        </div>
        <div>
          <p className='text-center'>
            Hey! I'm Dounya, a recent graduate from the university of Lyon 2, who's incredibly excited in building her own path in the data world.
            While obtaining my SISE master degree (Statistics and Computer science applied to Data Science), I worked on a number of projects that 
            allowed me to shape my skills around data analysis.
          </p>
        </div>
    </section>
  )
}

export default Presentation