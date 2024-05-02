import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col lg={12}>
          <h1>About</h1>
          <Link to="/">Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
