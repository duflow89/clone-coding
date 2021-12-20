import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const NavButton = () => {
  const [, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prev) => {
      const bodyElement = document.body.classList;
      if (!prev) bodyElement.add('nav-active');
      else bodyElement.remove('nav-active');
      return !prev;
    });
  };

  return (
    <button type='button' className='nav-button' onClick={handleActive} title='메뉴'>
      <IoMenu />
    </button>
  );
};

export default NavButton;
