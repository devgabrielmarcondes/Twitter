import React from "react";

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

export interface Props {
  name: string;
  nick: string;
  date: string;
  desc: string;
}

const Tweet: React.FC<Props> = ({name, nick, date, desc}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>@{nick}</span>
            <Dot />
            <time>{date}</time>
          </Header>

          <Description>{desc}</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              3
            </Status>
            <Status>
              <RetweetIcon />
              8
            </Status>
            <Status>
              <LikeIcon />
              200
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
