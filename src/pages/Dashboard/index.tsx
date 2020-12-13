import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Container, AlbumsGrid, Pagination, PaginationOption } from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

interface Album {
  id: string;
  title: string;
}

// interface NewAlbums {
//   userId: string;
//   id: string;
//   title: string;
// }

const Dashboard: React.FC = () => {
  // const [newAlbums, setNewAlbums] = useState<NewAlbums[]>(() => {
  //   const storagedNewAlbums = localStorage.getItem('@photoBrowser:newAlbums');
  //   if (storagedNewAlbums) {
  //     return JSON.parse(storagedNewAlbums);
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('@photoBrowser:newAlbums', JSON.stringify(newAlbums));
  // }, [newAlbums]);

  // useEffect(() => {
  //   api.get(`albums`).then((response) => {
  //     setNewAlbums(response.data);
  //   });
  // }, []);

  const [albums, setAlbums] = useState<Album[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  // plannig on make dynamic the limit of items and because of it, we will need the setLimit in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    api.get(`albums?_page=${currentPage}&_limit=${limit}`).then((response) => {
      setTotal(response.headers['x-total-count']);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        arrayPages.push(i);
      }
      setPages(arrayPages);

      setAlbums(response.data);
    });
  }, [currentPage, limit, total]);

  return (
    <>
      <Menu />
      <Container>
        <Header title="Albums" totalItems={total} firstPage />

        <AlbumsGrid>
          <ul>
            {albums.map((album) => (
              <Link
                to={{
                  pathname: `album/${album.id}`,
                  state: {
                    albumTitle: album.title,
                  },
                }}
                key={album.id}
              >
                <li>{album.title}</li>
              </Link>
            ))}
          </ul>
        </AlbumsGrid>
        <Pagination>
          {currentPage !== 1 && (
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <FiChevronLeft />
            </button>
          )}
          {pages.map((page) => (
            <PaginationOption
              isClicked={page === currentPage}
              role="button"
              key={page}
              onClick={() => setCurrentPage(page)}
              onKeyDown={() => setCurrentPage(page)}
            >
              {page}
            </PaginationOption>
          ))}
          {currentPage !== pages.length && (
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <FiChevronRight />
            </button>
          )}
        </Pagination>
      </Container>
    </>
  );
};

export default Dashboard;
