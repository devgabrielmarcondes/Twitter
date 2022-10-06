import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gabriel Marcondes</h1>
        <h2>@gab_mrcd</h2>

        <p>
          Desenvolvedor na <a href="https://zafyr.com.br">@Zafyr</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 03 de outubro de 2005
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>118</strong>
          </span>
          <span>
            <strong>229</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
