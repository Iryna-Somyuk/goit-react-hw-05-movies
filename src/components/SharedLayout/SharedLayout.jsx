import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from "react-icons/fc";
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
          <FcFilmReel size={35}/>
          </span>{' '}
          GoWatch Films
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
