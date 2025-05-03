import { useEffect, useRef } from "react";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaBullhorn,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";
import team from "../images/team.jpg";
import "../styles/AboutUs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Miguel from "../images/Team/Miguel.jpg";
import Yisset from "../images/Team/Yisset.jpeg";
import Daniel from "../images/Team/Daniel.jpg";

function AboutUs() {
  // Refs para los elementos a animar
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);
  const teamCardsRef = useRef(null);
  const valuesRef = useRef(null);
  const cardRefs = useRef([]);
  const teamMemberRefs = useRef([]);
  const teamMemberCardsRef = useRef([]);
  const benefitCardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    // Observer para secciones principales
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, index * 300);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observar secciones principales
    [
      heroRef,
      missionRef,
      benefitsRef,
      teamRef,
      teamCardsRef,
      valuesRef,
    ].forEach((ref) => {
      if (ref.current) sectionObserver.observe(ref.current);
    });

    // Observar tarjetas de misión
    cardRefs.current.forEach((card) => {
      if (card) sectionObserver.observe(card);
    });

    // Observar tarjetas de beneficios
    benefitCardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    // Observar contenedor de miembros
    if (teamCardsRef.current) sectionObserver.observe(teamCardsRef.current);

    // Observar tarjetas individuales de miembros
    teamMemberCardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  // Funciones para agregar refs
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const addToBenefitCardRefs = (el) => {
    if (el && !benefitCardRefs.current.includes(el))
      benefitCardRefs.current.push(el);
  };

  const addToTeamMemberRefs = (el) => {
    if (el && !teamMemberRefs.current.includes(el))
      teamMemberRefs.current.push(el);
  };

  const addToTeamMemberCardsRef = (el) => {
    if (el && !teamMemberCardsRef.current.includes(el))
      teamMemberCardsRef.current.push(el);
  };

  return (
    <>
      <Header />
      <div className="about-us-container">
        {/* Hero Section */}
        <section className="about-hero" ref={heroRef}>
          <div className="hero-content">
            <h1 className="hero-title">Conecta Poly</h1>
            <p className="hero-subtitle">
              Plataforma oficial para conectar estudiantes y oportunidades en el
              Politécnico Jaime Isaza Cadavid
            </p>
            <div className="hero-cta">
              <button className="primary-button">
                <a href="#Contact">Únete ahora</a>
              </button>
            </div>
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="mission-section" ref={missionRef}>
          <div className="section-content">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Nuestra Misión
            </h2>
            <div className="mission-cards">
              <div className="mission-card" ref={addToCardRefs}>
                <div className="card-icon">
                  <FaUsers className="icon" />
                </div>
                <h3>Conectar</h3>
                <p>
                  Crear puentes entre estudiantes y docentes del Politécnico
                  Jaime Isaza Cadavid
                </p>
              </div>
              <div className="mission-card" ref={addToCardRefs}>
                <div className="card-icon">
                  <FaLightbulb className="icon" />
                </div>
                <h3>Innovar</h3>
                <p>
                  Ofrecer soluciones tecnológicas para fortalecer nuestra
                  comunidad
                </p>
              </div>
              <div className="mission-card" ref={addToCardRefs}>
                <div className="card-icon">
                  <FaHandshake className="icon" />
                </div>
                <h3>Colaborar</h3>
                <p>
                  Fomentar oportunidades de crecimiento académico y personal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="benefits-section" ref={benefitsRef}>
          <div className="section-content">
            <h2 className="section-title-b">
              <span className="title-decoration"></span>
              Beneficios de Conecta Poly
            </h2>
            <div className="benefits-grid">
              <div className="benefit-card" ref={addToBenefitCardRefs}>
                <div className="benefit-icon">
                  <FaSearch className="icon" />
                </div>
                <h3>Descubre oportunidades</h3>
                <p>Encuentra proyectos, eventos y colaboraciones académicas</p>
              </div>
              <div className="benefit-card" ref={addToBenefitCardRefs}>
                <div className="benefit-icon">
                  <FaUserFriends className="icon" />
                </div>
                <h3>Conecta con estudiantes</h3>
                <p>
                  Amplía tu red de contactos dentro de la comunidad
                  universitaria
                </p>
              </div>
              <div className="benefit-card" ref={addToBenefitCardRefs}>
                <div className="benefit-icon">
                  <FaBullhorn className="icon" />
                </div>
                <h3>Mantente informado</h3>
                <p>
                  Recibe las últimas noticias y anuncios del Politécnico Jaime
                  Isaza Cadavid
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="team-section" ref={teamRef}>
          <div className="section-content">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Nuestro Equipo
            </h2>
            <div className="team-content">
              <div className="team-text">
                <p>
                  Somos un grupo de estudiantes del Politécnico Jaime Isaza
                  Cadavid que buscan crear herramientas que fortalezcan los
                  lazos dentro de nuestra comunidad.
                </p>
                <p>
                  Combinamos conocimientos en desarrollo web, diseño y
                  comunicación para hacer de Conecta Poly una plataforma útil
                  para todos.
                </p>
              </div>
              <div className="team-image">
                <img
                  src={team}
                  alt="Equipo Conecta Poly"
                  className="team-photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Miembros del Equipo */}
        <section className="team-members-section" ref={teamCardsRef}>
          <div className="section-content">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Conoce al Equipo
            </h2>
            <div className="team-members-grid">
              <div
                className="team-member-card"
                ref={(el) => {
                  addToTeamMemberRefs(el);
                  addToTeamMemberCardsRef(el);
                }}
              >
                <div className="member-image-container">
                  <img
                    src={Miguel}
                    alt="Miguel Angel Pérez"
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>Miguel Angel Pérez Rojas</h3>
                  <div className="role-tags">
                    <span className="role-tag">Lider</span>
                    <span className="role-tag">Desarrollador</span>
                    <span className="role-tag">Diseñador</span>
                  </div>
                </div>
              </div>

              <div
                className="team-member-card"
                ref={(el) => {
                  addToTeamMemberRefs(el);
                  addToTeamMemberCardsRef(el);
                }}
              >
                <div className="member-image-container">
                  <img
                    src={Yisset}
                    alt="Yisset Dayana Gil Gallego"
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>Yisset Dayana Gil Gallego</h3>
                  <div className="role-tags">
                    <span className="role-tag">Desarrolladora</span>
                  </div>
                </div>
              </div>

              <div
                className="team-member-card"
                ref={(el) => {
                  addToTeamMemberRefs(el);
                  addToTeamMemberCardsRef(el);
                }}
              >
                <div className="member-image-container">
                  <img
                    src={Daniel}
                    alt="Daniel Andres Cardona Varela"
                    className="member-photo"
                  />
                </div>
                <div className="member-info">
                  <h3>Daniel Andres Cardona Varela</h3>
                  <div className="role-tags">
                    <span className="role-tag">Desarrollador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="values-section" ref={valuesRef}>
          <div className="section-content">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Nuestros Valores
            </h2>
            <ul className="values-list">
              <li>
                <strong>Excelencia:</strong> Mantenemos los estándares de
                calidad del Politécnico Jaime Isaza Cadavid
              </li>
              <li>
                <strong>Innovación:</strong> Buscamos siempre mejorar y
                actualizar nuestra plataforma
              </li>
              <li>
                <strong>Comunidad:</strong> Priorizamos las necesidades de
                nuestros usuarios
              </li>
              <li>
                <strong>Transparencia:</strong> Operamos con honestidad y
                claridad
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="Contact">
          <div className="section-content">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Contáctanos
            </h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto del mensaje"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="primary-button">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;