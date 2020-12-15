import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

import { Container } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <BarLoader color="#fff" loading />
    </Container>
  );
};

export default Spinner;
