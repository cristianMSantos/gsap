import { Grid, IconButton } from "@mui/material";
import React from "react";
import "./project.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Project = () => {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".item");

  const prevSlide = () => {
    slider.prepend(items[items.length - 1]);
  };

  const nextSlide = () => {
    slider.append(items[0]);
  };

  return (
    <section id="project">
      <div className="background-video">
        {/* <video autoPlay loop muted id="project-video">
                        <source src="../src/assets/tech.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos em HTML5.
                    </video> */}
        <Grid
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
                {/* <h1 className="title-project">{'project'}</h1> */}
                <ul className="slider">
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/greicy.png')",
                    }}
                  >
                    {/* <div className="backdropGreicy"></div> */}
                    <div className="content-project" style={{ zIndex: 2 }}>
                      <h2 className="title-project">Psicóloga Greicy Pais</h2>
                      <p className="description">
                        Doutoranda em Psicologia, graduada em Psicologia e
                        Enfermagem, com especialização em Neuropsicologia, MBA
                        em Gestão de Pessoas e Coach, Terapias Cognitivas*,
                        Acupuntura* e Urgência e Emergência.
                      </p>
                      <button>
                        <a
                          href="https://psicologagreicypais.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/themasterpizza.png')",
                      // backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">The Master Pizza</h2>
                      <p className="description">
                        Pizzaria especializada em eventos que leva a excelência
                        dos sabores até você. Descubra um mundo de sabores
                        únicos e experiências gastronômicas incríveis,
                        cuidadosamente preparadas por uma equipe especializada.
                        Transforme seu evento em uma verdadeira festa para o
                        paladar.
                      </p>
                      <button>
                        <a
                          href="https://themasterpizza.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/decorfabri.png')",
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">Decor Fabri</h2>
                      <p className="description">
                        Equipe dedicada a revolucionar o setor de móveis
                        planejados, fornecendo aos clientes o conhecimento, as
                        ferramentas e a compreensão necessárias para que eles
                        possam criar ambientes que expressem sua essência e
                        impulsionem seu bem-estar. Trabalham para construir um
                        futuro onde a harmonia entre design e funcionalidade
                        seja a base para um estilo de vida mais inspirador e
                        sustentável para todos.
                      </p>
                      <button>
                        <a
                          href="https://decorfabri.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/greicy.png')",
                    }}
                  >
                    {/* <div className="backdropGreicy"></div> */}
                    <div className="content-project" style={{ zIndex: 2 }}>
                      <h2 className="title-project">Psicóloga Greicy Pais</h2>
                      <p className="description">
                        Doutoranda em Psicologia, graduada em Psicologia e
                        Enfermagem, com especialização em Neuropsicologia, MBA
                        em Gestão de Pessoas e Coach, Terapias Cognitivas*,
                        Acupuntura* e Urgência e Emergência.
                      </p>
                      <button>
                        <a
                          href="https://psicologagreicypais.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/themasterpizza.png')",
                      // backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">The Master Pizza</h2>
                      <p className="description">
                        Pizzaria especializada em eventos que leva a excelência
                        dos sabores até você. Descubra um mundo de sabores
                        únicos e experiências gastronômicas incríveis,
                        cuidadosamente preparadas por uma equipe especializada.
                        Transforme seu evento em uma verdadeira festa para o
                        paladar.
                      </p>
                      <button>
                        <a
                          href="https://themasterpizza.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage: "url('/image/decorfabri.png')",
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">Decor Fabri</h2>
                      <p className="description">
                        Equipe dedicada a revolucionar o setor de móveis
                        planejados, fornecendo aos clientes o conhecimento, as
                        ferramentas e a compreensão necessárias para que eles
                        possam criar ambientes que expressem sua essência e
                        impulsionem seu bem-estar. Trabalham para construir um
                        futuro onde a harmonia entre design e funcionalidade
                        seja a base para um estilo de vida mais inspirador e
                        sustentável para todos.
                      </p>
                      <button>
                        <a
                          href="https://decorfabri.com.br/"
                          style={{ textDecoration: "none" }}
                        >
                          Visite
                        </a>
                      </button>
                    </div>
                  </li>
                  {/* <li
                    className="item"
                    style={{
                      backgroundImage:
                        "url('https://images7.alphacoders.com/878/878663.jpg')",
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">"Last Trace Of Us"</h2>
                      <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore fuga voluptatum, iure corporis inventore
                        praesentium nisi. Id laboriosam ipsam enim.
                      </p>
                      <button>Visite</button>
                    </div>
                  </li> */}
                  {/* <li
                    className="item"
                    style={{
                      backgroundImage:
                        "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')",
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">"Urban Decay"</h2>
                      <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore fuga voluptatum, iure corporis inventore
                        praesentium nisi. Id laboriosam ipsam enim.
                      </p>
                      <button>Read More</button>
                    </div>
                  </li>
                  <li
                    className="item"
                    style={{
                      backgroundImage:
                        "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
                    }}
                  >
                    <div className="content-project">
                      <h2 className="title-project">"The Migration"</h2>
                      <p className="description">
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore fuga voluptatum, iure corporis inventore
                        praesentium nisi. Id laboriosam ipsam enim.{" "}
                      </p>
                      <button>Read More</button>
                    </div>
                  </li> */}
                </ul>
                <nav className="nav">
                  <IconButton
                    className="btn prev"
                    aria-label="arrow-back-outline"
                    onClick={prevSlide}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  <IconButton
                    className="btn next"
                    aria-label="arrow-forward-outline"
                    onClick={nextSlide}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </nav>
                {/* {window.innerWidth >= 600 && (
                  <div className="scroll-project">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="scroll-text">ROLE PARA BAIXO</span>
                  </div>
                )} */}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
