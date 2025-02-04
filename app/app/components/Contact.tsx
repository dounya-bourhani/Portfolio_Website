import React from 'react'
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id='contact' className='prose prose-lg !max-w-none flex flex-col items-center justify-center bg-white'>

        <h2>Let's connect!</h2>

        <div className='w-full'>
            <p className='text-center'>If you want to get in touch with me, feel free to..</p>

            <div className='grid grid-cols-2 justify-items-center items-center my-24'>

                <div className='flex flex-col items-center'>
                    <a href="mailto:bourhani.dounya@gmail.com" className="hover:scale-125 hover:brightness-75 duration-300">
                        <svg className='h-12' xmlns="http://www.w3.org/2000/svg" fill="#90CCDE" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </a>
                    <p>send me a nice email :D</p>
                </div>

                <div className='justify-items-center'>
                  <Socials/>
                  <p>visit my socials ;)</p>
                </div>

            </div>

            <div>
                <form action="https://formsubmit.co/bourhani.dounya@gmail.com" method="POST" className="flex flex-col mx-96">
                    <textarea name="message" placeholder="or you can even leave me a message here !" className="self-center textarea textarea-bordered w-full h-40 border-[#90CCDE]"
                    ></textarea>
                    <button type="submit" className="mt-3 btn self-end bg-[#90CCDE]">Send</button>
                </form>
            </div>
            

        </div>   
    </section>
  )
}

export default Contact