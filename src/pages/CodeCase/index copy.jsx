import React, { useEffect, useRef, useState } from "react";
import './index.css'
import { Box, Grid, Typography } from "@mui/material";
// import './typing'

export const CodeCase = () => {
    const typedTextRef = useRef(null);
    const cursorRef = useRef(null);

    const textArray = ["hard", "fun", "a journey", "LIFE"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    useEffect(() => {
        if (cursorRef.current && typedTextRef.current) {
            function type() {
                if (charIndex < textArray[textArrayIndex].length) {
                    if (!cursorRef.current.classList.contains("typing")) cursorRef.current.classList.add("typing");
                    typedTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                }
                else {
                    cursorRef.current.classList.remove("typing");
                    setTimeout(erase, newTextDelay);
                }
            }

            function erase() {
                console.log('erase')
                if (charIndex > 0) {
                    if (!cursorRef.current.classList.contains("typing")) cursorRef.current.classList.add("typing");
                    typedTextRef.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                }
                else {
                    cursorRef.current.classList.remove("typing");
                    textArrayIndex++;
                    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 1100);
                }
            }

            // Chama a função type quando o componente é montado
            setTimeout(type, newTextDelay); // Adicionando atraso antes de iniciar o typing
        }

    }, []);

    return (
        <>
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src="../src/assets/tech.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos em HTML5.
                </video>
                <Box className="content" sx={{ p: 3 }}>
                    <Grid container>
                        <Grid item xs={12} className="full center" flexDirection={"column"}>
                            {/* <h1 className="title" >{text}</h1> */}
                            <p className="coding">Coding is
                                <span ref={typedTextRef} className="typed-text"></span>
                                <span ref={cursorRef} className="cursor">&nbsp;</span>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}