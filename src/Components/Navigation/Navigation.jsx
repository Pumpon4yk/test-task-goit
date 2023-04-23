import { Header, Link, Nav } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Header>
      <Nav>
        {location.pathname === '/tweets' ? (
          <Link style={{position: 'absolute', left: 0,}} to="/">go back</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </Header>
  );
};

export default Navigation;
