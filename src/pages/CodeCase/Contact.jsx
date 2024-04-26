import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import './contact.css'

export const Contact = () => {
    // Função para definir o estilo do TextField
    const getTextFieldStyle = () => ({
        "& .MuiOutlinedInput-root": {
            color: "white",
            fontFamily: "Arial",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                borderWidth: "1px",
            },
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "1px",
                },
            },
            "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                },
            },
        },
        "& .MuiInputLabel-outlined": {
            color: "white",
            "&.Mui-focused": {
                color: "white",
            },
        },
    });
    return (
        <>
            <section id="contact">
                <div className="background-video">
                    <video autoPlay loop muted id="about-video">
                        <source src="../src/assets/tech.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos em HTML5.
                    </video>
                    <Grid className="container" container sx={{ zIndex: 1, position: "absolute", height: "100vh" }}>
                        <Grid item xs={12} className="full center" sx={{ height: "100%" }}>
                            <div className="outer">
                                <div className="inner" style={{ flexDirection: 'row' }}>

                                    {/* <h1 className="title">{'CONTACT'}</h1> */}
                                    <Grid item className="full center" xs={6} flexDirection={'column'}>
                                        <h1 className="contact-title">Vamos conversar sobre o seu projeto?</h1>
                                        <h2 className="contact-subtitle">
                                            Com mais de 11 anos de mercado e mais de 1000 projetos entregues com sucesso, somos a sua melhor escolha.
                                        </h2>
                                    </Grid>
                                    <Grid item className="full center" xs={6} flexDirection={'column'}>
                                        <h1>Fale sobre você</h1>
                                        <Box component="form" display={'flex'} flexDirection={'column'}>
                                            <TextField
                                                id="name"
                                                label="Nome"
                                                variant="outlined"
                                                margin="normal"
                                                sx={getTextFieldStyle()}
                                            />
                                            <TextField
                                                id="email"
                                                label="E-mail"
                                                variant="outlined"
                                                margin="normal"
                                                sx={getTextFieldStyle()} />
                                            <TextField
                                                id="phone"
                                                label="Telefone"
                                                variant="outlined"
                                                margin="normal"
                                                sx={getTextFieldStyle()} />
                                        </Box>
                                    </Grid>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}