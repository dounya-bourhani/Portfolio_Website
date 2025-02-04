import React from 'react';
import Image from 'next/image'


const Skills = () => {
  return (
    <section id='skills' className='prose prose-lg !max-w-none flex flex-col items-center bg-violet-50'>

        <h2>Skills</h2>

        <div className='grid grid-cols-4 gap-8 w-full justify-items-center items-center'>
            <Image src="git.svg" alt="Python" width={100} height={100}/>
            <Image src="python.svg" alt="Python" width={100} height={100}/>
            <Image src="sql.svg" alt="Python" width={100} height={100}/>
            <Image src="excel.svg" alt="Python" width={100} height={100}/>
            <Image src="docker.svg" alt="Python" width={150} height={150}/>
            <Image src="tableau.svg" alt="Python" width={200} height={200}/>
            <Image src="powerbi.svg" alt="Python" width={200} height={200}/>
            <Image src="azure.svg" alt="Python" width={200} height={200}/>

            {/* <img src="git.svg" alt="Python" className=' w-24'></img>
            <img src="python.svg" alt="Python" className='w-24'></img>
            <img src="sql.svg" alt="Python" className='w-24'></img>
            <img src="excel.svg" alt="Python" className='w-24'></img>
            <img src="docker.svg" alt="Python" className='h-12'></img>
            <img src="tableau.svg" alt="Python" className='h-12'></img>
            <img src="powerbi.svg" alt="Python" className='h-20'></img>
            <img src="azure.svg" alt="Python" className='h-12'></img> */}


        </div>

    </section>
  )
}

export default Skills