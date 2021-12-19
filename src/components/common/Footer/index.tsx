const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer-inner'>&copy; {year} all rights reserved.</div>
    </footer>
  );
};

export default Footer;
