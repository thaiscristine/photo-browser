import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;

  a {
    margin: 0 15px;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
