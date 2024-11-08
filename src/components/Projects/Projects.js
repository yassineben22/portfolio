import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carteverte from "../../Assets/Projects/carteverte.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carteverte}
              isBlog={false}
              title="Carte Verte"
              description="Le projet 'Carte Verte' est une application web interactive permettant aux utilisateurs de contribuer à la coloration d'une carte électronique du Maroc. Elle offre une interface administrateur pour gérer les participants, les codes de carte, ainsi que les régions et provinces. Le backend a été développé en Spring Boot avec Spring Security et JWT pour sécuriser l'API REST, tandis que Swagger UI a été utilisé pour documenter les endpoints. La base de données est gérée avec MySQL, et le frontend a été conçu avec Angular.js, offrant une expérience utilisateur dynamique et fluide. Les fonctionnalités principales incluent la contribution des participants à la carte et un panneau de contrôle complet pour l’administration."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carteverte}
              isBlog={false}
              title="Carte Verte"
              description="Le projet 'Carte Verte' est une application web interactive permettant aux utilisateurs de contribuer à la coloration d'une carte électronique du Maroc. Elle offre une interface administrateur pour gérer les participants, les codes de carte, ainsi que les régions et provinces. Le backend a été développé en Spring Boot avec Spring Security et JWT pour sécuriser l'API REST, tandis que Swagger UI a été utilisé pour documenter les endpoints. La base de données est gérée avec MySQL, et le frontend a été conçu avec Angular.js, offrant une expérience utilisateur dynamique et fluide. Les fonctionnalités principales incluent la contribution des participants à la carte et un panneau de contrôle complet pour l’administration."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carteverte}
              isBlog={false}
              title="Carte Verte"
              description="Le projet 'Carte Verte' est une application web interactive permettant aux utilisateurs de contribuer à la coloration d'une carte électronique du Maroc. Elle offre une interface administrateur pour gérer les participants, les codes de carte, ainsi que les régions et provinces. Le backend a été développé en Spring Boot avec Spring Security et JWT pour sécuriser l'API REST, tandis que Swagger UI a été utilisé pour documenter les endpoints. La base de données est gérée avec MySQL, et le frontend a été conçu avec Angular.js, offrant une expérience utilisateur dynamique et fluide. Les fonctionnalités principales incluent la contribution des participants à la carte et un panneau de contrôle complet pour l’administration."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
