import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FC = ({ children }) => (
  <>
    <Header />

    <div className='container'>{children}</div>

    <Footer />
  </>
);

export default Layout;
