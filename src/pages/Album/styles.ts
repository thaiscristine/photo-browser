import styled from 'styled-components';

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
    justify-content: center;
    flex-flow: wrap;
  }
  li {
    min-width: 150px;
    background: #fff;
    padding: 10px;
    margin: 10px;
    color: #4d416b;
    list-style: none;
    opacity: 0.9;
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
