import React from 'react';
import { FiImage, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/dashboard">
        <FiImage size={30} />
      </Link>
      <Link to="/profile/1">
        <FiUser size={30} />
      </Link>
    </Container>
  );
};

export default Menu;
