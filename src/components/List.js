import React from "react";
import User from "./User";
import { Card, ListGroup, Col } from "react-bootstrap";
export default ({ name, users, deleteUser }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {users.map(user => {
              return <User user={user} name={name} deleteUser={deleteUser} />;
            })}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};
