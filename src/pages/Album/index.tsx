import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import api from '../../services/api';

import { Container, AlbumsGrid } from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

interface AlbumParams {
  id: string;
}

interface PhotosAlbum {
  id: string;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

interface StateObject {
  albumTitle: string;
}

const Album: React.FC = () => {
  const { params } = useRouteMatch<AlbumParams>();
  const { state } = useLocation<StateObject>();

  const [photosAlbum, setPhotosAlbum] = useState<PhotosAlbum[] | null>(null);

  useEffect(() => {
    api.get(`photos/`).then((response) => {
      setPhotosAlbum(
        response.data.filter(
          (item: PhotosAlbum) => item.albumId === parseInt(params.id, 0),
        ),
      );
    });
  }, [params.id]);

  return (
    <>
      <Menu />
      <Container>
        <Header title={state?.albumTitle} totalItems={photosAlbum?.length} />
        <AlbumsGrid>
          {photosAlbum && (
            <ul>
              {photosAlbum.map((photo) => (
                <Link
                  key={photo.id}
                  to={{
                    pathname: `/photo/${photo.id}`,
                    state: {
                      albumId: photosAlbum,
                    },
                  }}
                >
                  <li>
                    <img src={photo.thumbnailUrl} alt="" />
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </AlbumsGrid>
      </Container>
    </>
  );
};

export default Album;
