import React from "react";

import { Container, Avatar, Info, FollowButton } from "./styles";

interface Props {
  name: string;
  nickname: string;
  url: string;
  alink?: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, url, alink }) => {
  return (
    <Container>
      <div>
        <Avatar src={url} />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined href={alink} target="_blank">Checar</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
