import React from "react";
import List from "./List";
import { Container, Row } from "react-bootstrap";

const FooBar = ({ users, deleteUser }) => {
  let fooUsers = [];
  let barUsers = [];
  let fooBarUsers = [];
  users.forEach(user => {
    if (user.id % 15 === 0) {
      fooBarUsers.push(user);
    } else if (user.id % 3 === 0) {
      fooUsers.push(user);
    } else if (user.id % 5 === 0) {
      barUsers.push(user);
    }
  });
  return (
    <Container>
      <Row>
        <List users={fooUsers} name="foo" deleteUser={deleteUser} />
        <List users={barUsers} name="bar" deleteUser={deleteUser} />
        <List users={fooBarUsers} name="fooBar" deleteUser={deleteUser} />
      </Row>
    </Container>
  );
};

export default FooBar;
