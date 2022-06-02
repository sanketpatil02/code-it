import React from "react";
import BlogTopic from "../components/BlogTopic";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { careerData } from "./CareerData.js";
const Blogs = () => {
  const [careerList, setCareerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  useEffect(() => {
    setLoading(true);
    const apiUrl = "https://codekit-backend.herokuapp.com/api/careers";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((careers) => {
        setLoading(false);
        setCareerList(careers);
      });
  }, []);

  return (
    <>
      <div className="banner">
        <h1>Learned lot, get some experience</h1>
        <div></div>
        <p>
          Get updates about latest internship and placement opportunities
          available at one place. We update all internship and placement
          opportunities ASAP.
        </p>
      </div>
      {loading ? (
        <div className="question-container">
          <div style={{ marginLeft: "48%" }}>
            <ReactLoading type={"spokes"} color={"blue"} />
          </div>
        </div>
      ) : (
        <Container fluid style={{ padding: "10px", margin: "10px" }}>
          <Row>
            {/* <Col> */}
            {careerData.map((career, index) => (
              <Card style={{ margin: "auto", width: "80%" }}>
                <Card.Body>
                  <Card.Title>
                    <span style={{ color: "#0275d8", fontWeight: "bold" }}>
                      Position
                    </span>{" "}
                    : {career.position}
                  </Card.Title>
                  <Card.Title>
                    <span style={{ color: "#0275d8", fontWeight: "bold" }}>
                      Company Name:
                    </span>{" "}
                    {career.companyName}
                  </Card.Title>

                  <Card.Text>
                    {" "}
                    <span style={{ color: "#0275d8", fontWeight: "bold" }}>
                      Description :
                    </span>{" "}
                    {career.description}
                  </Card.Text>

                  <a href={career.applyLink} target="_blank" rel="noreferrer">
                    <Button variant="primary">Apply </Button>
                  </a>
                </Card.Body>
              </Card>
            ))}
            {/* </Col> */}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Blogs;
