import { Link } from 'react-router-dom';
import Logo from '~/resources/images/logo2.svg';

const Header = () => (
  <header className='header'>
    <h1 className='header-title'>
      <Link to='/'>
        <img src={Logo} alt='로고' />
      </Link>
    </h1>

    <nav className='nav'>
      <div className='nav-item'>
        <Link to='/'>A 가공업체</Link>
      </div>
      <div className='nav-item'>
        <Link to='/'>로그아웃</Link>
      </div>
    </nav>
  </header>
);

export default Header;
