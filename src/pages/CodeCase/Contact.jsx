import React from "react";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";
import './contact.css'

export const Contact = () => {
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
                    <Grid container sx={{ zIndex: 1, position: "absolute", height: "100vh" }}>
                        <Grid item xs={12} md={12} className="full center" sx={{ height: "100%" }}>
                            <div className="outer">
                                <div className="inner">
                                    <Grid container spacing={2} sx={{ height: "100%" }} className="container-grid">
                                        <Grid item xs={12} md={6} className="contact-message" flexDirection={'column'}>
                                            <h1 className="contact-title">Vamos conversar sobre o seu projeto?</h1>
                                            <h2 className="contact-subtitle">
                                                Com mais de 11 anos de mercado e mais de 1000 projetos entregues com sucesso, somos a sua melhor escolha.
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="contact-grid" flexDirection={'column'}>
                                            <h1 className="contact-title-fields">Fale sobre você</h1>
                                            <Box className="contact-form" component="form">
                                                <TextField
                                                    id="name"
                                                    label="Nome"
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    sx={getTextFieldStyle()}
                                                    InputLabelProps={{ style: { fontSize: '1em', '@media (maxWidth:600px)': { fontSize: '0.8em' } } }}
                                                />
                                                <TextField
                                                    id="email"
                                                    label="E-mail"
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    sx={getTextFieldStyle()}
                                                />
                                                <TextField
                                                    id="phone"
                                                    label="Telefone"
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    sx={getTextFieldStyle()}
                                                />
                                                <FormControl>
                                                    <FormLabel id="project-group" sx={{ color: 'white' }}>
                                                        Qual o seu tipo de projeto?
                                                    </FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="project-group"
                                                        name="project-group"
                                                    >
                                                        <FormControlLabel value="aplicativo" control={<Radio />} label="Aplicativo" />
                                                        <FormControlLabel value="software" control={<Radio />} label="Software" />
                                                        <FormControlLabel value="website" control={<Radio />} label="Website" />
                                                        <FormControlLabel value="manutencao" control={<Radio />} label="Manutenção" />
                                                    </RadioGroup>
                                                </FormControl>
                                                <InputLabel sx={{ color: 'white' }}>Mais sobre o seu projeto:</InputLabel>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    margin="normal"
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    placeholder="Conte-nos algo sobre o seu projeto"
                                                    sx={getTextFieldStyle()}
                                                />
                                                <Button type="submit" variant="outlined" sx={{
                                                    width: "50%",
                                                    border: "2px solid", color: "white",
                                                    borderRadius: "20px", padding: "0px 15px", height: "40px"
                                                }}>
                                                    ENVIAR
                                                </Button>
                                            </Box>
                                        </Grid>
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
