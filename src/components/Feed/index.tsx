import React from "react";

import Tweet from "../Tweet";
import Marcondes from "../../assets/marcondes.jpeg";

import { Container, Tab, Tweets } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Accord"  />
        <Tweet url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Ecommerce"  />
        <Tweet url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Letmeask"  />
        <Tweet url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Pwitter"  />
      </Tweets>
    </Container>
  );
};

export default Feed;
