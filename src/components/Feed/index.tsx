import React from "react";

import Tweet from "../Tweet";
import Marcondes from "../../assets/marcondes.jpeg";
import Accord from "../../assets/accord.png";

import { Container, Tab, Tweets } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet urlimg={Accord} url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Accord"  />
        <Tweet urlimg={Accord} url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Ecommerce"  />
        <Tweet urlimg={Accord} url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Letmeask"  />
        <Tweet urlimg={Accord} url={Marcondes} name="Gabriel Marcondes" nick="gab_mrcd" date="06 de Outubro" desc="Projeto Pwitter"  />
      </Tweets>
    </Container>
  );
};

export default Feed;
