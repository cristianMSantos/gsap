import React, { useEffect, useState } from "react";
import './index.css'
import { Box, Grid, Typography } from "@mui/material";

const texts = [
    "#CONSTRUA O SOFTWARE DO SEU JEITO.",
    "#Inovação sob medida para o seu negócio.",
    "#Seu sucesso é nossa principal linha de código."
];

export const CodeCase = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

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

    return (
        <>

            <Box className="content" sx={{ p: 3 }}>
                <Box id="home">
                    <div className="background-video">
                        <video autoPlay loop muted>
                            <source src="../src/assets/tech.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos em HTML5.
                        </video>
                        <Grid container sx={{ zIndex: 1, position: "absolute" }}>
                            <Grid item xs={12} className="full center" flexDirection={"column"}>
                                <h1 className="title">{displayText}</h1>
                            </Grid>
                        </Grid>
                    </div >
                </Box>
                <Box id="about">
                    <Grid container>
                        <Grid item xs={12} className="full center" flexDirection={"column"}>
                            <h1 className="title">{displayText}</h1>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}