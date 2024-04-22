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

        scene2.fromTo("#scene2", { y: "100vh" }, { y: "0%", duration: 1 }); // Animação para mover o sol para cima



    }, { scope: container });
    return (
        <>
            <div ref={container}>

                <img id="scene2" src="../src/assets/2.svg" alt="Descrição da imagem SVG" />
                <img id="scene1" src="../src/assets/4.svg" alt="Descrição da imagem SVG" />
                <div className="scrollElement"></div>
            </div>
        </>
    )
}