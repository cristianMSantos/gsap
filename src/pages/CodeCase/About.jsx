import { Grid, IconButton } from "@mui/material";
import React from "react";
import './about.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const About = () => {
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
            <section id="about">
                <div className="background-video">
                    <video autoPlay loop muted id="about-video">
                        <source src="../src/assets/tech.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos em HTML5.
                    </video>
                    <Grid container sx={{ zIndex: 1, position: "absolute", height: "100vh" }}>
                        <Grid item xs={12} className="full center" sx={{ height: "100%" }}>
                            <div className="outer">
                                <div className="inner">

                                    {/* <h1 className="title-about">{'ABOUT'}</h1> */}
                                    <ul className='slider'>
                                        <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
                                            <div className='content-about'>
                                                <h2 className='title-about'>"Lossless Youths"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{
                                            backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"
                                        }}>
                                            <div className='content-about'>
                                                < h2 className='title-about'>"Estrange Bond"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}>
                                            <div className='content-about'>
                                                <h2 className='title-about'>"The Gate Keeper"</h2>
                                                <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}>
                                            <div className='content-about'>
                                                <h2 className='title-about'>"Last Trace Of Us"</h2>
                                                <p className='description'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                                                </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}>
                                            <div className='content-about'>
                                                <h2 className='title-about'>"Urban Decay"</h2>
                                                <p className='description'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                                                </p>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                        <li className='item' style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}>
                                            <div className='content-about'>
                                                <h2 className='title-about'>"The Migration"</h2>
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

                                </div>
                            </div>
                        </Grid >
                    </Grid >
                </div >
            </section >
        </>
    )
}