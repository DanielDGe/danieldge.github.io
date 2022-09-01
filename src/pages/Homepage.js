import React from 'react'
import Layout from "../components/Layout";

import { AiOutlineMail } from "react-icons/ai/index";
import { BsTelephone } from "react-icons/bs/index";

import { skills, studies, experiences, projects } from "../profile";

function Homepage() {

  return (

    <Layout>

      {/* Header Card */}
      <header className="row h-100" >

        <div className="col-md-12">

          <div className="card card-body bg-primary text-light animate__animated animate__fadeIn">

            <div className="row">

              <div className="col-md-4 m-auto">
                <img src="/images/profile.png" alt="" className="img-fluid rounded mx-auto d-block w-75" style={{}} />
              </div>

              <div className="overview col-md-8">

                <h2>Daniel García</h2>
                <h3>Desarrollador de software</h3>
                <p>
                  Licenciado en desarrollo de software, con amplios conocimientos en diferentes lenguajes de programación
                  trabajando tanto en backend como en frontend. Soporte técnico de equipos informáticos a nivel de software y hardware.
                </p>

                <p>
                  <AiOutlineMail /> Email: ddge07@gmail.com
                  <br />
                  <BsTelephone /> Teléfono: +507 6446-2963
                </p>

                <a href="mailto:ddge07@gmail.com?subject=Contacto programador" className="btn btn-outline-light">
                  Contactar
                </a>


              </div>

            </div>

          </div>

        </div>

      </header >


      {/* Second section */}

      <section className="row mt-4">

        <div className="col-md-4 py-2">
          <div className="card animate__animated animate__fadeInLeft">

            <div className="card-body">

              <h3>Habilidades</h3>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>


        <div className="col-md-8 pt-2">

          {/* Formation */}
          <div className="card animate__animated animate__fadeInRight">

            <div className="card-body">

              <h3>Formación</h3>

              <ul>

                {/* List Item Experience */}
                {studies.map(({ title, description, from, to }, index) => (

                  <li className="pt-3" key={index}>
                    <h4>{title}</h4>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      {description}
                    </p>
                  </li>

                ))}

              </ul>

            </div>

          </div>

          <div className="card mt-2 animate__animated animate__fadeInRight">

            <div className="card-body">

              <h3>Experiencia</h3>

              <ul>

                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (

                  <li className="pt-3" key={index}>
                    <h4>{title}</h4>
                    <h5>
                      {from} {to ? `- ${to}` : ""}
                    </h5>
                    <p>
                      {description}
                    </p>
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* Porfolio */}
      <section>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body mt-4">

              <div className="row">

                <div className="col-md-12 my-3">
                  <h2 className="text-center">Proyectos desarrollados</h2>
                </div>

                {projects.map(({ name, description, image, link }, index) => (
                  <div className="col-md-4 p-2" key={index}>

                    <div className="card h-100">

                      <div className="overflow">
                        <img
                          src={`/images/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>

                      <div className="card-body d-flex flex-column">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a className="btn btn-light mt-auto" href={link} target="_blank" rel="noreferrer">Visit</a>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

      </section>

    </Layout>

  )

}

export default Homepage