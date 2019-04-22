import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }
  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => {
    return {
      isHovering: !state.isHovering
    };
  };

  render() {
    let { user, name, deleteUser } = this.props;
    let { userName, id, joined } = user;
    return (
      <Card
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {moment(joined).format("MMM Do")}
          </Card.Subtitle>
          {this.state.isHovering && (
            <Button onClick={() => deleteUser(id)}>{name}</Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}
