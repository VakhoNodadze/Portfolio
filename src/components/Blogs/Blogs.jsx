import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";

const Blogs = () => {
  const { blogs } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Blogs" />
          <Row>
            {blogs.map((blog) => {
              const { id, title, url, img } = blog;
              return (
                <Col lg={6} key={id}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div data-tilt className=" rounded">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Blog Link"
                        rel="noopener noreferrer"
                        className="image_link"
                      >
                        <ProjectImg alt={title} filename={img} />
                      </a>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
