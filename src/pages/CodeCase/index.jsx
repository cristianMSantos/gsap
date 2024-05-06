import React, { useEffect, useRef, useState } from "react";
import './index.css'
import { Box, Button, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EasePack, Observer } from "gsap/all";
import { useSelector } from "react-redux";
import { TextPlugin } from "gsap/all";
import { SlowMo } from "gsap/EasePack";
import { Project } from "./Project";
import { Contact } from "./Contact";
import { About } from "./About";

const texts = [
    "#CONSTRUA O SOFTWARE DO SEU JEITO.",
    "#Inovação sob medida para o seu negócio.",
    "#Seu sucesso é nossa principal linha de código."
];

export const CodeCase = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(Observer);
    gsap.registerPlugin(TextPlugin, SlowMo);
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

        let container = document.getElementById("textEffect"),
            sentenceEndExp = /(\.|\?|!)$/g;

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

        const machineGun = (text) => {
            var words = text.split(" "),
                tl = gsap.timeline({ delay: 0.6, repeat: -1, repeatDelay: 2 }),
                wordCount = words.length,
                time = 0,
                word, element, duration, isSentenceEnd, i;


            for (i = 0; i < wordCount; i++) {
                word = words[i];
                isSentenceEnd = sentenceEndExp.test(word);

                element = container.appendChild(document.createElement("h3").appendChild(document.createTextNode(word)).parentNode);
                console.log(element)

                duration = Math.max(0.5, word.length * 0.08); // Palavras mais longas levam mais tempo para ler, então ajuste o tempo. Mínimo de 0.5 segundos.
                if (isSentenceEnd) {
                    duration += 0.6; // Se for a última palavra de uma frase, adicione um pouco mais de tempo para uma pausa dramática.
                }
                // Defina a opacidade e a escala como 0 inicialmente. Definimos z como 0,01 apenas para ativar a renderização 3D no navegador, o que torna as coisas mais suaves.
                gsap.set(element, { opacity: 0, scale: 0, z: 0.01 });
                // A facilidade SlowMo é como uma easeOutIn, mas é configurável em termos de força e por quanto tempo a inclinação é linear.
                tl.to(element, { duration: duration, scale: 1.2, ease: "slow(0.25, 0.9)" }, time)
                    // Note que o terceiro parâmetro da configuração SlowMo no seguinte tween é true - isso faz com que ele yoyo, ou seja, a opacidade (autoAlpha) aumentará para 1 durante o tween e depois voltará para 0 no final.
                    .to(element, { duration: duration, opacity: 1, ease: "slow(0.25, 0.9, true)" }, time)
                // .to(element, { duration: 0.5, opacity: 0 }, time + duration);
                time += duration - 0.05;
                if (isSentenceEnd) {
                    time += 0.6; // No final de uma frase, adicione uma pausa para efeito dramático.
                }
            }
        }

        document.getElementById("HomeButton").addEventListener("click", () => {
            gotoSection(0, 1)
        })
        document.getElementById("ProjectButton").addEventListener("click", () => {
            gotoSection(1, 1)
        })
        document.getElementById("AboutButton").addEventListener("click", () => {
            gotoSection(2, 1)
        })
        document.getElementById("ContactButton").addEventListener("click", () => {
            gotoSection(3, 1)
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

        machineGun("CONSTRUA O SEU SITE SOFTWARE APP DO SEU JEITO.");

    }, { scope: container });

    return (
        
            
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
                                        <div id="textEffect" className="home-title">
                                            {/* <h1 className="title-case">Bem Vindo a CodeCase</h1> */}
                                            {/* <h1 className="title-case"></h1> */}
                                        </div>
                                        {/* <div>
                                            <img src="../src/assets/Job opening.gif" alt="teste" style={{
                                                transform: 'scaleX(-1)', width: '70%'
                                            }} />
                                        </div> */}
                                        <div className="buttom-mobile-div">
                                            <Button variant="outlined" className="button-mobile">
                                                VAMOS CONVERSAR
                                            </Button>
                                        </div>
                                        <div className="scroll">
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                            <span className="scroll-text">ROLE PARA BAIXO</span>
                                        </div>
                                        <div className="home-bottom">
                                            <h1 className="home-message">{displayText}</h1>
                                            <Button variant="outlined" className="button-home">
                                                VAMOS CONVERSAR
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div >
                </section>
                <Project />
                <About />
                <Contact />
            </Box>

        
    )
}