import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Pwitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Minhas habilidades"
            elements={[
              <FollowSuggestion name="ReactJS" nickname="para componentização de interfaces"  />,
              <FollowSuggestion name="Typescript" nickname="para tipar o JavaScript"  />,
              <FollowSuggestion
                name="MongoDB"
                nickname="para gerenciar os dados de uma aplicação"
                
              />,
            ]}
          />
          <List
            title="Alguns projetos"
            elements={[<News feature="Accord" desc="Uma reprodução da aplicação Discord" />, <News feature="Ecommerce" desc="Um ecommerce fullstack de roupas" />, <News feature="Letmeask" desc="Uma plataforma para tirar dúvidas de programação"/>, <News feature="Pwitter" desc="Um portfolio e Twitter ao mesmo tempo" />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
