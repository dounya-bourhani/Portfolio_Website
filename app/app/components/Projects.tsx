import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id='projects' className='prose prose-lg !max-w-none flex flex-col items-center justify-center bg-white'>
        <h2>Projects</h2>

        <h3 className='text-xl font-medium underline'>Data Analytics</h3>

        <div className="carousel carousel-center rounded-box max-w-screen-xl space-x-8 my-8">

            <a href='https://github.com/dounya-bourhani/NBA_stats_analysis?tab=readme-ov-file' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/rudygobert_dashboard.png" width={290} height={150} alt="Tableau Dashboard - Gobert stats" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">Rudy Gobert defensive statistics</h5>
                        <p>Based on NBA player Rudy Gobert&apos;s statistics, I was able to visualize if he&apos;s doing a good season 
                            so far, compared to his best seasons.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Excel</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Tableau</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://public.tableau.com/app/profile/dounya.bourhani/vizzes' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/joboffers.png" width={290} height={150} alt="Job offers analysis" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">French job offers</h5>
                        <p>The goal was to build a database (through web scraping and APIs) to analyse and visualize the 
                            reality of french job offers in construction.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Pandas</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">SQL</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/SMILES_integration/tree/main/integration_des_smiles' target='_blank' className='no-underline'>
                <div className="carousel-item card bg-neutral-50 border rounded-lg shadow-xl w-96 h-96 flex flex-col hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/smilesbd.png" width={290} height={150} alt="SMILES Database" className='w-80'/>
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">SMILES database</h5>
                        <p>During my internship in a cancer research center, i made a database of SMILES formula 
                            corresponding with its drug names.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Pandas</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Excel</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>
        
        <h3 className='text-xl font-medium underline'>Data Science</h3>
        
        <div className="carousel carousel-center rounded-box max-w-screen-xl space-x-8 mt-8">

            <a href='https://github.com/dounya-bourhani/SMILES_integration/tree/main/evaluation_des_performances' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/smilesmodel.png" width={290} height={150} alt="SMILES integration model" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">SMILES in medical reports</h5>
                        <p>I compared the effectiveness of a language model before and after the addition of SMILES formulas
                             in medical reports.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">NLP</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/IA_Code_Retranscription' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/jupycoder.png" width={290} height={150} alt="JupyCoder" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">JupyCoder</h5>
                        <p>A multimodal AI application for automatic code and markdown generation for Jupyter notebooks.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">LLM</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/ProjetPython' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                    <Image src="/sardeimmo.png" width={290} height={150} alt="Sarde Immo project"/>
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">Sarde Immo</h5>
                        <p>An application to better understand the market and estimate the sale price of new real estate.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Machine Learning</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/ScikitNB_Shiny' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                        <Image src="/scikitnb.png" width={290} height={150} alt="ScikitNB" />
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">ScikitNB</h5>
                        <p>ScikitNB is an R package inspired by Python <em>scikit-learn&apos;s</em> machine learning algorithms.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">R</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">R Shiny</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/dounya-bourhani/Challenge_Securite/tree/main' target='_blank' className='no-underline '>
                <div className="carousel-item card bg-neutral-50 border shadow-xl w-96 h-96 flex flex-col rounded-lg hover:brightness-90 duration-200">
                    <figure className="m-0">
                        <Image src="/challengesecu.png" width={290} height={150} alt="Challenge Securite" className='w-80'/>
                    </figure>
                    <div className="card-body flex flex-col justify-between items-center text-center text-xs ">
                        <h5 className="card-title">Security challenge</h5>
                        <p>Our goals was to analyse security data and create a model that could predict malicious intrusions.</p>
                        <div className="card-actions">
                            <div className="badge badge-outline text-xs text-neutral font-black">Python</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Machine Learning</div>
                            <div className="badge badge-outline text-xs text-neutral font-black">Streamlit</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>


    </section>

  )
}

export default Projects