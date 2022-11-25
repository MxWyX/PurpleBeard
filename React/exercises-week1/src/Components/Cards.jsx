import React from "react";
import { Component } from "react";
import { faker } from "@faker-js/faker";
import { Card, Icon, Image } from "semantic-ui-react";

class Cards extends Component {
  render() {
    let name = faker.name.firstName();
    return (
      <Card>
        <Image src={faker.image.avatar()} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in {faker.date.month()}</span>
          </Card.Meta>
          <Card.Description>
            {name} is a person, doing person things
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {faker.random.numeric()} Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default Cards;
