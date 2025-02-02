import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='prose prose-lg !max-w-none flex flex-col items-center justify-center p-10 border shadow-2xl rounded-lg my-4'>
        <h2>Projects</h2>

        <div className="carousel carousel-center rounded-box space-x-4 p-4">
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box" />
            </div>
        </div>
    </section>

  )
}

export default Projects