import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class Data extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.description}</Card.Text>
            <Card.Text>{this.props.book.status}</Card.Text>
            <Card.Text>{this.props.book.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Data;
