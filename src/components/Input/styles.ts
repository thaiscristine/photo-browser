import styled from 'styled-components';

// interface ContainerProps {
//   isFocused: boolean;
//   isFilled: boolean;
//   isErrored: boolean;
// }

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #ffffff;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;
//   svg {
//     margin: 0;
//   }
//   span {
//     background: #c53030;
//     color: #fff;
//     &::before {
//       border-color: #c53030 transparent;
//     }
//   }
