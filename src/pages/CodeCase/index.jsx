import React, { useEffect, useRef, useState } from "react";
import './index.css'
import { Box, Button, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { useSelector } from "react-redux";

const texts = [
    "#CONSTRUA O SOFTWARE DO SEU JEITO.",
    "#Inovação sob medida para o seu negócio.",
    "#Seu sucesso é nossa principal linha de código."
];

export const CodeCase = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(Observer);
    const container = useRef();

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    // const [currentIndex, setCurrentIndex] = useState(-1);
    // const [animating, setAnimating] = useState(false);
    const currentSectionIndex = useSelector((state) => state.section.currentSectionIndex)

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            const fullText = texts[currentTextIndex];
            setDisplayText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex > fullText.length) {
                clearInterval(interval);
                // Após a animação do texto atual, avançar para o próximo texto no array
                setTimeout(() => {
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }, 1000); // Aguarde 1 segundo antes de exibir o próximo texto
            }
        }, 100); // Ajuste a velocidade da animação aqui (100ms neste exemplo)

        return () => clearInterval(interval);
    }, [currentTextIndex]);

    useGSAP((context, contextSafe) => {
        let sections = document.querySelectorAll("section"),
            outerWrappers = gsap.utils.toArray(".outer"),
            innerWrappers = gsap.utils.toArray(".inner"),
            wrap = gsap.utils.wrap(0, sections.length),
            images = document.querySelectorAll(".background-video"),
            currentIndex = -1,
            animating

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        const gotoSection = contextSafe((index, direction) => {
            console.log(index)
            index = wrap(index); // make sure it's valid
            animating = true;
            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1.25, ease: "power1.inOut" },
                    onComplete: () => animating = false
                });
            if (currentIndex >= 0) {
                // The first time this function runs, current is -1
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -100 * dFactor })
                    .set(sections[currentIndex], { autoAlpha: 0 });
            }
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo([outerWrappers[index], innerWrappers[index]], {
                yPercent: i => i ? -100 * dFactor : 100 * dFactor
            }, {
                yPercent: 0
            }, 0)
                .fromTo(images[index], { yPercent: 100 * dFactor }, { yPercent: 0 }, 0)
            currentIndex = index;
        });

        document.getElementById("HomeButton").addEventListener("click", () => {
            gotoSection(0, 1)
        })
        document.getElementById("AboutButton").addEventListener("click", () => {
            gotoSection(1, 1)
        })
        document.getElementById("ContactButton").addEventListener("click", () => {
            gotoSection(2, 1)
        })

        // goodRef.current.addEventListener("click", onClickGood);

        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true
        });
        gotoSection(0, 1);
    }, { scope: container });

    useEffect(() => {
        // gotoSection(1, 1)
    }, [currentSectionIndex])


    return (
        <>

            <Box className="content" ref={container}>
                <section id="home">
                    <div className="background-video">
                        <video autoPlay loop muted>
                            <source src="../src/assets/tech.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos em HTML5.
                        </video>
                        <Grid className="container" container sx={{ zIndex: 1, position: "absolute", height: "100vh" }}>
                            <Grid item xs={12} className="full center" flexDirection={"column"} sx={{ height: "100%" }}>
                                <div className="outer">
                                    <div className="inner">
                                        <div className="home-title">
                                            <h1 className="title-case">Bem Vindo a CodeCase</h1>
                                        </div>
                                        <div className="scroll">
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                        </div>
                                        <div className="home-bottom">
                                            <h1 className="home-message">{displayText}</h1>
                                            <Button variant="outlined"  sx={{ 
                                                border: "2px solid", color: "white", 
                                                borderRadius: "20px", padding: "0px 15px", height: "40px" }}>
                                                VAMOS CONVERSAR
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div >
                </section>
                <section id="about">
                    <div className="background-video">
                        <video autoPlay loop muted id="about-video">
                            <source src="../src/assets/tech.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos em HTML5.
                        </video>
                        <Grid className="container" container>
                            <Grid item xs={12} className="full center" flexDirection={"column"}>
                                <div className="outer">
                                    <div className="inner">
                                        <div className="bg two full center">
                                            <h1 className="title">{'ABOUT'}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                <section id="contact">
                    <div className="background-video">
                        <video autoPlay loop muted id="about-video">
                            <source src="../src/assets/tech.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos em HTML5.
                        </video>
                        <Grid className="container" container>
                            <Grid item xs={12} className="full center" flexDirection={"column"}>
                                <div className="outer">
                                    <div className="inner">
                                        <div className="bg two full center">
                                            <h1 className="title">{'CONTACT'}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </Box>

        </>
    )
}