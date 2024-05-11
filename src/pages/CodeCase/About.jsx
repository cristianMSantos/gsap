import React from "react";
import "./about.css";
import { Box, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export const About = () => {
  const [value, setValue] = React.useState("1");
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia("(max-width: 900px)").matches
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section id="about">
      <div className="background-video">
        <video autoPlay loop muted id="about-video">
          <source src="./tech.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        <Grid
          className="container overlay"
          container
          sx={{
            zIndex: 1,
            position: "absolute" /*height: "100vh",*/,
            height: "100%",
            minHeight: "-moz-available",
            minHeight: "-webkit-fill-available",
            minHeight: "fill-available",
          }}
        >
          <Grid item xs={12} className="full center" sx={{ height: "100%" }}>
            <div className="outer">
              <div className="inner">
                {/* <h1 className="title-about">{'About'}</h1> */}
                <Grid container spacing={2} sx={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className="about-message"
                    flexDirection={"column"}
                  >
                    <h1 className="about-title">QUEM SOMOS NÓS</h1>
                    {!isMobile ? (
                      <h2 className="about-subtitle">
                        "A CodeCase nasceu da união de cinco amigos apaixonados
                        por tecnologia e inovação. Nossa inspiração veio da
                        convicção de que a tecnologia pode causar um impacto
                        positivo na vida das pessoas. Com uma equipe
                        diversificada, mas unida por essa paixão comum, cada um
                        de nós traz uma bagagem única de experiências e
                        habilidades, abrangendo programação, desenvolvimento de
                        software, design e gestão de projetos."
                      </h2>
                    ) : (
                      <h2 className="about-subtitle">
                        "A CodeCase nasceu da união de cinco amigos apaixonados
                        por tecnologia e inovação. Nossa inspiração veio da
                        convicção de que a tecnologia pode causar um impacto
                        positivo na vida das pessoas."
                      </h2>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className="about-message"
                    flexDirection={"column"}
                  >
                    {/* <img className="about-logo" src="../src/assets/logo.png" alt="logo" /> */}
                    <img
                      src="./Job opening.gif"
                      alt="teste"
                      style={{
                        transform: "scaleX(-1)",
                        width: "70%",
                      }}
                    />
                  </Grid>

                  <Box className="about-mission">
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className="about-message"
                      flexDirection={"column"}
                    >
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            TabIndicatorProps={{
                              style: { backgroundColor: "white" },
                            }}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            sx={{
                              "& .MuiButtonBase-root.MuiTab-root": {
                                color: "white", // Define o fundo como branco para as abas não selecionadas
                              },
                              "& .Mui-selected": {
                                backgroundColor: "#a700ff", // Define o fundo como roxo para a aba selecionada
                              },
                            }}
                          >
                            <Tab label="Missão" value="1" />
                            <Tab label="Visão" value="2" />
                            <Tab
                              label="Por que contratar a CodeCase?"
                              value="3"
                            />
                          </TabList>
                        </Box>
                        <TabPanel className="about-tabText" value="1">
                          Acreditamos que as tecnologias só têm sentido quando
                          são utilizadas para resolver problemas reais e
                          melhorar a vida das pessoas. Nossa missão é contribuir
                          para um mundo mais conectado, empático e eficiente,
                          onde cada interação seja uma oportunidade de
                          fortalecer laços e promover progresso.
                        </TabPanel>
                        <TabPanel className="about-tabText" value="2">
                          Visualizamos um futuro em que a tecnologia tem um
                          propósito maior do que apenas impulsionar a
                          produtividade e automatizar processos. Como uma equipe
                          de amigos apaixonados por tecnologia e inovação,
                          buscamos ser referência nesse ecossistema em que a
                          colaboração e a empatia são os pilares do sucesso.
                        </TabPanel>
                        <TabPanel className="about-tabText" value="3">
                          Uma das principais vantagens de contratar a CodeCase
                          como a sua fábrica de software, é poder contar com uma
                          equipe de profissionais especialistas na área de
                          negócios e desenvolvimento de sistemas, que irão
                          ajudar a sua empresa a potencializar os processos e
                          impulsionar o crescimento do seu negócio.{" "}
                        </TabPanel>
                      </TabContext>
                    </Grid>
                  </Box>
                  {window.innerWidth >= 600 && (
                    <div className="scroll-project">
                      <div className="chevron"></div>
                      <div className="chevron"></div>
                      <div className="chevron"></div>
                      <span className="scroll-text">ROLE PARA BAIXO</span>
                    </div>
                  )}
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
