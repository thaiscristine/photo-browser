import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 20px;
  background: rgba(0, 0, 0, 0.1);
  min-height: 500px;
  border-radius: 30px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const AlbumsGrid = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;

  img {
    max-width: 600px;
    width: 100%;
    margin-bottom: 40px;
  }
`;
