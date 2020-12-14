import React from 'react';

import { Container, AlbumsGrid } from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

const Profile: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <Header title="Profile" />
        <div>
          <AlbumsGrid>{/* <img src={photo?.url} alt="" /> */}</AlbumsGrid>
        </div>
      </Container>
    </>
  );
};

export default Profile;
