import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Kochin Furniture"
              description="Kochin Furniture is your one-stop destination for high-quality and stylish furniture pieces."
              ghLink="https://github.com/jibinntcr/Kochin_Furniture"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="ICA DCA"
              description="Its international Conforenace Website for Cochin University of Sciene and technology."
              ghLink="https://github.com/jibinntcr/ICADCA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="DCA CUSAT"
              description="Department of Computer Applciations CUSAT Website."
              ghLink="https://github.com/jibinntcr/DCA_CUSAT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Amigos Residency"
              description="Amigos Residency Website. Amigos Residecy is an international Hotel"
              ghLink="https://github.com/jibinntcr/amigos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="TBI CUSAT"
              description="Technology Business Incubator Website for CUSAT."
              ghLink="https://github.com/jibinntcr/TBICusatV2"
              demoLink="https://tbi.cusat.ac.in//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="METAVALLEY TBI"
              description="Metavalley Technology Business Incubator Website."
              ghLink="https://github.com/jibinntcr/MetaValley_TBI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects