import React from "react";

import { Container } from "./styles";

export interface Props {
  feature: string;
  desc: string;
}

const News: React.FC<Props> = ({feature, desc}) => {
  return (
    <Container>
      <span>{desc}</span>
      <strong>{feature}</strong>
    </Container>
  );
};

export default News;
