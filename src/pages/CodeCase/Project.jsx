import { Grid, IconButton } from "@mui/material";
import React from "react";
import './project.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Project = () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');

    const prevSlide = () => {
        slider.prepend(items[items.length - 1]);
    }

    const nextSlide = () => {
        slider.append(items[0])
    }

    return (
        <>
            <section id="project">
                <div className="background-video">
                    {/* <video autoPlay loop muted id="project-video">
                        <source src="../src/assets/tech.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos em HTML5.
                    </video> */}
                    <Grid container sx={{ zIndex: 1, position: "absolute", height: "100vh" }}>
                        <Grid item xs={12} className="full center" sx={{ height: "100%" }}>
                            <div className="outer">
                                <div className="inner">

                                    {/* <h1 className="title-project">{'project'}</h1> */}
                                    <ul className='slider'>
                                        <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
                                            <div className='content-project'>
                                                <h2 className='title-project'>"Lossless Youths"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{
                                            backgroundImage: "url('../src/assets/themasterpizza.png')"
                                            // backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"
                                        }}>
                                            <div className='content-project'>
                                                < h2 className='title-project'>"The Master Pizza"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Visite</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}>
                                            <div className='content-project'>
                                                <h2 className='title-project'>"The Gate Keeper"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Visite</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}>
                                            <div className='content-project'>
                                                <h2 className='title-project'>"Last Trace Of Us"</h2>
                                                <p className='description'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                                                </p>
                                                <button>Visite</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}>
                                            <div className='content-project'>
                                                <h2 className='title-project'>"Urban Decay"</h2>
                                                <p className='description'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                                                </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}>
                                            <div className='content-project'>
                                                <h2 className='title-project'>"The Migration"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <nav className='nav'>
                                        <IconButton className='btn prev' aria-label="arrow-back-outline" onClick={prevSlide}>
                                            <ArrowBackIcon />
                                        </IconButton>
                                        <IconButton className='btn next' aria-label="arrow-forward-outline" onClick={nextSlide}>
                                            <ArrowForwardIcon />
                                        </IconButton>
                                    </nav>
                                    <div className="scroll-project">
                                        <div className="chevron"></div>
                                        <div className="chevron"></div>
                                        <div className="chevron"></div>
                                        <span className="scroll-text">ROLE PARA BAIXO</span>
                                    </div>

                                </div>
                            </div>
                        </Grid >
                    </Grid >
                </div >
            </section >
        </>
    )
}