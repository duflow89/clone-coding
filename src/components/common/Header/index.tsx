import { Link } from 'react-router-dom';
import { BiBuildings } from 'react-icons/bi';
import Logo from '~/resources/images/logo2.svg';
import NavButton from './NavButton';

const Header = () => (
  <header className='header'>
    <h1 className='header-title'>
      <Link to='/'>
        <img src={Logo} alt='로고' />
      </Link>
    </h1>

    <NavButton />

    <nav className='nav'>
      <div className='nav-item'>
        <Link to='/'>
          <BiBuildings /> A 가공업체
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/'>로그아웃</Link>
      </div>
    </nav>
  </header>
);

export default Header;
