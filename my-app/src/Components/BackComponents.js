import React from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponents = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button color="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponents;
