import React from "react";
import { Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const ButtonComponent = (props) => {
  return (
    <div>
      <Container>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">Simple Style Unit</p>
        <hr className="my-2" />
        <p>Well, nothing here</p>
        <p className="lead">
          <Button color="dark"><FontAwesomeIcon icon={faInfo} /> Learn More</Button>
        </p>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(ButtonComponent)