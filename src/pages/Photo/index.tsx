import React, { useState, useEffect } from 'react';
import {
  // Link,
  // useLocation,
  useRouteMatch,
} from 'react-router-dom';

// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Container, AlbumsGrid } from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

interface AlbumParams {
  id: string;
}
// interface PhotosAlbum {
//   id: string;
//   albumId: number;
//   title: string;
//   thumbnailUrl: string;
// }
interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
// interface StateObject {
//   albumId: string;
// }

const Photo: React.FC = () => {
  const { params } = useRouteMatch<AlbumParams>();
  // const { state } = useLocation<StateObject>();

  const [photo, setPhoto] = useState<Photo | null>(null);
  // const [album, setAlbum] = useState<PhotosAlbum>();
  // const id: number = +params.id;
  useEffect(() => {
    api.get(`photos/${params.id}`).then((response) => {
      setPhoto(response.data);
    });

    // console.log(album);

    // if (state) {
    //   api.get(`albums/${state.albumId}`).then((response) => {
    //     setAlbum(response.data);
    //     console.log(response.data);
    //   });
    // }
  }, [params.id]);

  return (
    <>
      <Menu />
      <Container>
        <Header title={photo?.title} />
        <div>
          {/* {id > 1 && (
            <Link to={`/photo/${id - 1}`}>
              <FiChevronLeft />
              teste
            </Link>
          )} */}
          <AlbumsGrid>
            <img src={photo?.url} alt="" />
          </AlbumsGrid>
          {/* {id !== Number(state?.albumId) && (
            <Link to={`/photo/${id + 1}`}>
              <FiChevronRight />
              teste
            </Link>
          )} */}
        </div>
      </Container>
    </>
  );
};

export default Photo;
