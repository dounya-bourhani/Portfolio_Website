import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='prose prose-lg !max-w-none flex flex-col items-center bg-violet-50'>

        <h2>Skills</h2>

        <div className='grid grid-cols-4 gap-8 w-full justify-items-center items-center'>
            <img src="git.svg" alt="Python" className=' w-24'></img>
            <img src="python.svg" alt="Python" className='w-24'></img>
            <img src="sql.svg" alt="Python" className='w-24'></img>
            <img src="excel.svg" alt="Python" className='w-24'></img>
            <img src="docker.svg" alt="Python" className='h-12'></img>
            <img src="tableau.svg" alt="Python" className='h-12'></img>
            <img src="powerbi.svg" alt="Python" className='h-20'></img>
            <img src="azure.svg" alt="Python" className='h-12'></img>


        </div>

    </section>
  )
}

export default Skills