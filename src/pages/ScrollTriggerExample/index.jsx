import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'

export const ScrollTriggerExample = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
    let speed = 100;

    useGSAP(() => {
        let scene2 = gsap.timeline();
        ScrollTrigger.create({
            animation: scene2,
            trigger: ".scrollElement",
            start: "top top",
            end: "2200 100%",
            scrub: 3,
        });

        scene2.fromTo("#scene2", { y: "100%" }, { y: "0%", duration: 1 }); // Animação para mover o sol para cima
        // // Animação para remover gradualmente o filtro greyscale
        // scene2.to("#scene1", { filter: "grayscale(0)", duration: 2.5, ease: "power1.out" }, 0);
        // Animação para aplicar gradualmente a luz no chão
        scene2.to(".light-overlay", { opacity: 0.8, width: "100%", duration: 2, ease: "power1.out" }, 0);
        // scene2.to(".sun-rays", { width: "200%", duration: 2.5, ease: "power1.out", rotation: 45 }, 0);

    }, { scope: container });
    return (
        <>
            <div ref={container}>
                <div>
                    <img id="scene2" src="./sol.svg" alt="Descrição da imagem SVG" />
                    <div className="sceneWrapper">
                        <img id="scene1" src="./4.svg" alt="Descrição da imagem SVG" />
                        <div className="light-overlay">
                            <div className="sun-rays"></div>
                        </div>
                    </div>
                </div>
                {/* <img id="scene1" src="../src/assets/4.svg" alt="Descrição da imagem SVG" /> */}
                <div className="scrollElement"></div>
            </div>
        </>
    )
}