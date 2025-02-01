'use client'
import React from 'react'
import Image from 'next/image'
import {Typewriter} from 'react-simple-typewriter'

const Presentation = () => {
  return (
    <section id='home' className='prose prose-lg !max-w-none flex flex-col items-center justify-center p-10 border shadow-2xl rounded-lg my-4'>
      <h1 >Hi, I'm {' '}
        <span className="text-primary text-extrabold">
          <Typewriter
            words={['Dounya :)', 'a Data Analyst']}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
          />
        </span>
      </h1>

        <div>
          <Image src='/dounya.jpeg' alt='headhsot' width={300} height={300} className='rounded-full border shadow-2xl'/>
        </div>

        <div>
          <p className='text-center text-base'>
            Hey! I'm Dounya, a recent graduate from the University of Lyon 2, who's incredibly excited in building her own path in the Data World.
            While obtaining my SISE master degree (Statistics and Computer science applied to Data Science), I worked on a number of projects that 
            allowed me to shape my skills around data analysis.
          </p>
          {/* <p className='text-center text-base'>
            I'm currently looking for a position as a Data Analyst, where I can leverage my skills in data analysis, data visualization, and 
            machine learning to help companies make data-driven decisions.
          </p> */}
          <p className='text-center text-base'>
            Outside of career and academics, I enjoy playing basketball, as I am also a professionnal basketball player. I also enjoy watching 
            movies/series (never binge-watching, I swear), spending time with families and friends and I'm a huge R&B lover (you'll probably
            catch me vibing to old school Beyoncé).
          </p>
        </div>
    </section>
  )
}

export default Presentation