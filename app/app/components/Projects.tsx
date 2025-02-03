import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='prose prose-lg !max-w-none flex flex-col items-center justify-center border bg-white'>
        <h2>Projects</h2>

        <h3>Data Analytics</h3>

        <div className="carousel carousel-center rounded-box max-w-screen-xl space-x-8">

            <a href='https://public.tableau.com/app/profile/dounya.bourhani/vizzes' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./nba_dashboard.png" alt="Tableau Dashboard - Gobert stats" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">NBA statistics analysis</h5>
                        <p>Based on NBA player Rudy Gobert's statistics, I was able to visualize if he's doing a good season 
                            so far, or not.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Excel</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Tableau</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/SMILES_integration/tree/main/integration_des_smiles' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./smilesbd.png" alt="SMILES Database" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">SMILES database</h5>
                        <p>During my internship in a cancer research center, i made of a database of SMILES formula 
                            corresponding with its drug names.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Pandas</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Excel</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://public.tableau.com/app/profile/dounya.bourhani/vizzes' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./joboffers.png" alt="Job offers analysis" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">French job offers</h5>
                        <p>The goal was to build a database (through web scraping and APIs) to analyse and visualize the 
                            reality of french job offers in construction.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Pandas</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">SQL</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>
        
        <h3>Data Science</h3>
        
        <div className="carousel carousel-center rounded-box max-w-screen-xl space-x-8">

            <a href='https://github.com/dounya-bourhani/SMILES_integration/tree/main/evaluation_des_performances' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./smilesmodel.png" alt="SMILES integration model" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">SMILES in medical reports</h5>
                        <p>I compared the effectiveness of a language model before and after the addition of SMILES formulas
                             in medical reports.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">NLP</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/IA_Code_Retranscription' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./jupycoder.png" alt="JupyCoder" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">JupyCoder</h5>
                        <p>A multimodal AI application for automatic code and markdown generation for Jupyter notebooks.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">LLM</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/ProjetPython' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <img src="./sardeimmo.png" alt="Tableau Dashboard - Gobert stats" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">Sarde Immo</h5>
                        <p>An application to better understand the market and estimate the sale price of new real estate.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Machine Learning</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/ScikitNB_Shiny' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                        <img src="./scikitnb.png" alt="ScikitNB" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">ScikitNB</h5>
                        <p>ScikitNB is an R package inspired by Python <em>scikit-learn's</em> machine learning algorithms.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">R</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">R Shiny</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/Challenge_Securite/tree/main' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-base-100 shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                        <img src="./challengesecu.png" alt="Challenge Securite" className="w-80" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">Security challenge</h5>
                        <p>Our goals was to analyse security data and create a model that could predict malicious intrusions.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Python</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-[#90CCDE] font-black">Streamlit</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>


    </section>

  )
}

export default Projects