import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbySeo } from "gatsby-plugin-next-seo";

import Layout from "../templates/ConLayout";
import { Row, Col, Card, Container } from "react-bootstrap";

const team = () => {
  return (
    <div>
      <Layout>
        <GatsbySeo
          title="Borj-e Kabotar | About"
          description="The team of Borj-e Kabotar"
          canonical="https://borjekabotar.com/about/"
        />

        <div className="bg-image">
          <StaticImage
            src="../../static/images/towers_isfahan.jpg"
            alt="About"
            objectFit="cover"
            style={{ height: "50vh" }}
          />
          <h2>Team</h2>
        </div>

        <Container className="py-5">
          <Row>
            <Col>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Danilo Rosati</Card.Title>
                  <Card.Text className="position">
                    Project Co-Director
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Fariba Saiedi Anaraki</Card.Title>
                  <Card.Text className="position">
                    Project Co-Director
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="my-5">
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Francesca Adesso</Card.Title>
                  <Card.Text className="position">3D Modeler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Domizia D'Erasmo</Card.Title>
                  <Card.Text className="position">Web-GIS Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Edoardo Ferrari</Card.Title>
                  <Card.Text className="position">Architect</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Noemi Giovino</Card.Title>
                  <Card.Text className="position">Web Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Amir Jamshidi</Card.Title>
                  <Card.Text className="position">Translator</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Gaetano Pezzella</Card.Title>
                  <Card.Text className="position">Photographer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Giuseppe Salemmi</Card.Title>
                  <Card.Text className="position">3D Survey</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={3}>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>Ilaria Elisea Scerrato</Card.Title>
                  <Card.Text className="position">Social Anthropologist</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default team;
