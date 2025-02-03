import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='prose prose-lg !max-w-none flex flex-col items-center justify-center p-10 border shadow-2xl rounded-lg my-4'>
        <h2>Projects</h2>

        <h3>Data Analytics</h3>

        <div className="carousel carousel-center rounded-box max-w-screen-2xl space-x-8 overflow-visible">

        <a href='https://public.tableau.com/app/profile/dounya.bourhani/vizzes' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:scale-105 hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img
                    src="./nba_dashboard.png"
                    alt="Tableau Dashboard - Gobert stats"
                    className="w-80" />
                </figure>
                <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                    <h5 className="card-title">NBA statistics analysis</h5>
                    <p>Based on NBA player Rudy Gobert's statistics, I was able to visualize if he's doing a good season so far, or not.</p>
                    <div className="card-actions">
                        <div className="badge badge-outline text-xs">Excel</div>
                        <div className="badge badge-outline text-xs">Python</div>
                        <div className="badge badge-outline text-xs">Tableau</div>
                    </div>
                </div>
            </div>
</a>

        </div>
        
        <h3>Data Science</h3>
        
        <div className="carousel carousel-center rounded-box max-w-screen-2xl space-x-8 overflow-visible">

        <a href='https://github.com/dounya-bourhani/ProjetPython' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:scale-105 hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img
                    src="./sardeimmo.png"
                    alt="Tableau Dashboard - Gobert stats"
                    className="w-80" />
                </figure>
                <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                    <h5 className="card-title">Sarde Immo</h5>
                    <p>Develop an application to better understand the market and estimate the sale price of new real estate.</p>
                    <div className="card-actions">
                        <div className="badge badge-outline text-xs">Python</div>
                        <div className="badge badge-outline text-xs">Machine Learning</div>
                    </div>
                </div>
            </div>
            </a>

            <a href='https://github.com/dounya-bourhani/ScikitNB_Shiny' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:scale-105 hover:brightness-90 duration-200">
                    <figure className="m-0">
                        <img
                        src="./scikitnb.png"
                        alt="ScikitNB"
                        className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">ScikitNB</h5>
                        <p>ScikitNB is an R package inspired by Python <em>scikit-learn's</em> machine learning algorithms.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs">R</div>
                            <div className="badge badge-outline text-xs">Python</div>
                            <div className="badge badge-outline text-xs">R Shiny</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>


    </section>

  )
}

export default Projects