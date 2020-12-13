import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
  h1 {
  }
  span {
    margin: 10px 7px 0;
    font-weight: 400;
    font-size: 30px;
  }
  button {
    margin-left: 34px;
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
    svg {
      margin-top: 4px;
    }
  }
  @media (max-width: 350px) {
    flex-direction: column;
  }
`;
