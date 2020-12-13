import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PaginationOptionProps {
  isClicked: boolean;
}

export const Container = styled.div`
  max-width: 960px;
  margin: 20px;
  background: rgba(0, 0, 0, 0.1);
  min-height: 500px;
  border-radius: 30px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AlbumsGrid = styled.div`
  margin-top: 40px;
  ul {
    display: flex;
    flex-flow: wrap;
  }
  a {
    text-decoration: none;
  }
  li {
    min-width: 150px;
    background: #fff;
    padding: 10px;
    margin: 10px;
    color: #4d416b;
    list-style: none;

    transition: opacity 0.2s;
    transition: transform 0.2s;

    &:hover {
      opacity: 1;
      -webkit-transform: scale(1.06);
      -ms-transform: scale(1.06);
      transform: scale(1.06);
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  button {
    color: #fff;
    background: transparent;

    svg {
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#cc6aa5')};
      }
    }
  }
`;

export const PaginationOption = styled.div<PaginationOptionProps>`
  margin: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#cc6aa5')};
  }

  ${(props) =>
    props.isClicked &&
    css`
      color: #cc6aa5;
    `}
`;

// export const Form = styled.form<FormProps>`
//   margin-top: 40px;
//   max-width: 700px;

//   display: flex;

//   input {
//     flex: 1;
//     height: 70px;
//     padding: 0 24px;
//     border: 0;
//     border-radius: 5px 0 0 5px;
//     color: #3a3a3a;
//     border: 2px solid #fff;
//     border-right: 0;

//     ${(props) =>
//       props.hasError &&
//       css`
//         border-color: #c53030;
//       `}

//     &::placeholder {
//       color: #a8a8b3;
//     }
//   }

//   button {
//     width: 210px;
//     height: 70px;
//     background: #04d361;
//     border: 0;
//     border-radius: 0 5px 5px 0;
//     color: #fff;
//     transition: background-color 0.2s;

//     &:hover {
//       background: ${shade(0.2, '#04d361')};
//     }
//   }
// `;

// export const Repositories = styled.div`
//   margin-top: 80px;
//   max-width: 700px;

//   a {
//     background: #fff;
//     border-radius: 5px;
//     width: 100%;
//     padding: 24px;
//     display: block;
//     text-decoration: none;

//     display: flex;
//     align-items: center;

//     transition: transform 0.2s;

//     & + a {
//       margin-top: 16px;
//     }
//     &:hover {
//       transform: translateX(10px);
//     }

//     img {
//       width: 64px;
//       height: 64px;
//       border-radius: 50%;
//     }
//     div {
//       margin: 0 16px;
//       flex: 1;

//       strong {
//         font-size: 20px;
//         color: #3d3d4d;
//       }

//       p {
//         font-size: 18px;
//         color: #a8a8b3;
//       }
//     }

//     svg {
//       margin-left: auto;
//       color: #cbcbd6;
//     }
//   }
// `;

// export const Error = styled.span`
//   display: block;
//   color: #c53030;
//   margin-top: 8px;
// `;
