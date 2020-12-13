import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  title?: string;
  totalItems?: number;
  firstPage?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  title,
  totalItems,
  firstPage,
}: HeaderProps) => {
  const history = useHistory();
  return (
    <Container>
      <div>
        {title && (
          <h1>
            {title}

            {totalItems && <span>{totalItems}</span>}
          </h1>
        )}
      </div>
      {!firstPage && (
        <button type="button" onClick={() => history.goBack()}>
          <FiChevronLeft size={20} />
          back
        </button>
      )}
    </Container>
  );
};

export default Header;
