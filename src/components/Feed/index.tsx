import React from "react";

import Tweet from "../Tweet";

import { Container, Tab, Tweets } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet name="Zafyr" nick="Zafyr" date="06 de Outubro" desc="Projeto Accord"  />
        <Tweet name="Zafyr" nick="Zafyr" date="06 de Outubro" desc="Projeto Ecommerce"  />
        <Tweet name="Zafyr" nick="Zafyr" date="06 de Outubro" desc="Projeto Letmeask"  />
        <Tweet name="Zafyr" nick="Zafyr" date="06 de Outubro" desc="Projeto Pwitter"  />
      </Tweets>
    </Container>
  );
};

export default Feed;
