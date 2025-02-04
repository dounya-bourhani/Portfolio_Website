'use client'
import React from 'react'
import Image from 'next/image'
import {Typewriter} from 'react-simple-typewriter'
import Socials from "./Socials";

const AboutMe = () => {
  return (
    <section id='home' className='prose prose-lg !max-w-none left-0 flex flex-col items-center justify-center bg-violet-50 pt-40'>
      
      <h1 >Hi, I&apos;'m {" "}
        <span className="text-[#957DAD]">
          <Typewriter
            words={['Dounya :)', 'a Data Analyst']}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
          />
        </span>
      </h1>

      <div>
        <Image src='/dounya.jpeg' alt='headhsot' width={300} height={300} className='rounded-full border shadow-2xl hover:scale-125 duration-300 ease-in-out'/>
      </div>

      <div className='grid grid-cols-6 my-4'>
        <p className='text-center col-span-4 col-start-2'>
          Hey! I&apos;m Dounya, a recent graduate from the <span className='font-black text-fuchsia-900'>University of Lyon 2</span>, who&apos;s incredibly excited in 
          building her own path in the Data World. While obtaining my <span className='font-black text-fuchsia-900'>SISE master degree</span> (Statistics and 
          Computer science applied to Data Science), I worked on a number of projects that allowed me to shape my skills around data analysis.
        </p>
        {/* <p className='text-center text-base'>
          I'm currently looking for a position as a Data Analyst, where I can leverage my skills in data analysis, data visualization, and 
          machine learning to help companies make data-driven decisions.
        </p> */}
        <p className='text-center col-span-4 col-start-2'>
          Outside of career and academics, I enjoy playing basketball, as I am also a <span className='font-black text-fuchsia-900'>professionnal basketball
          player</span>. I also enjoy watching movies/series (never binge-watching, I swear), spending time with families and friends and I&apos;m a
          huge fan of R&B and Caribbean music.
        </p>
      </div>

      <Socials/>
    </section>
  )
}

export default AboutMe