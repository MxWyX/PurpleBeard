import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

function MovieCard() {
  useEffect(() => {
    const top250 = axios.get(
      `${process.env.TOP_250_MOVIES_URL}${process.env.IMDB_API_KEY}`
    );
    console.log(`${process.env.TOP_250_MOVIES_URL}${process.env.IMDB_API_KEY}`);
    console.log(top250);
  });
  return (
    <div>
      {/* <Card>
        <Image src={} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{!!!}</Card.Header>1
          <Card.Meta>
            <span className="date">!!!</span>
          </Card.Meta>
          <Card.Description>
            !!!
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            !!!
          </a>
        </Card.Content>
      </Card> */}
    </div>
  );
}

export default MovieCard;
