import React from 'react'

const Contact = () => {
  return (
    <section id='skills' className='prose prose-lg !max-w-none flex flex-col items-center justify-center bg-white'>

        <h2>Contact me!</h2>
        <div className='grid grid-cols-6 my-4'>
          <p className='text-center text-base col-span-4 col-start-2'>
            If you want to get in touch with me, feel free to send me an email at <span className='font-black text-fuchsia-900'>
            bourhani.dounya@gmail.com</span> or reach out to me on <span className='font-black text-fuchsia-900'>LinkedIn</span>.
            </p>
        </div>   
    </section>
  )
}

export default Contact