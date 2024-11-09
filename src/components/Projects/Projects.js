import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carteverte from "../../Assets/Projects/carteverte.png";
import estation from "../../Assets/Projects/estation.png";
import virustracker from "../../Assets/Projects/virustracker.png";

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
              imgPath={estation}
              isBlog={false}
              title="E-Station"
              description="Le projet 'E-Station' est une solution web et mobile complète que j'ai développée pour la gestion des stations-service pendant mon stage chez OkayEnergy. Cette application permet aux utilisateurs de superviser et de gérer les compteurs électroniques des pompes ainsi que les caisses de plusieurs stations. Pour le backend, j'ai utilisé Spring Boot avec Spring Security et OAuth 2.0 pour sécuriser l'accès, et PostgreSQL pour la gestion des données. Le frontend a été conçu avec React.js et Redux pour la version web et Flutter pour la version mobile, offrant une interface utilisateur intuitive et efficace."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virustracker}
              isBlog={false}
              title="Virus Tracker"
              description="Le projet 'Virus Tracker' consiste en une application web et mobile permettant de notifier les utilisateurs en temps réel en cas d'exposition pendant une pandémie. Grâce à ExpressJS pour l'API, VueJS pour l'application web, et Flutter pour l'application mobile, cette solution utilise Firebase pour la gestion des données, l'API Google Nearby Connections pour la détection de proximité, et OneSignal pour les notifications. Les fonctionnalités clés incluent des alertes en temps réel d'exposition, un suivi et un historique des contacts des utilisateurs, ainsi que des heatmaps pour identifier les zones à risque. Mon travail a couvert le développement de l’application mobile en Flutter, l’API en ExpressJS, et l’application web en Vue.js."
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
