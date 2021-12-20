import classNames from 'classnames';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

interface Props {
  label: string;
  onChange: (isActive: boolean) => void;
}

const Toggle: FC<Props> = ({ label, onChange: handleChangeParent }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive((prev) => {
      handleChangeParent(!prev);
      return !prev;
    });
  };

  const elementId = v4();

  return (
    <div className='filter-toggle'>
      <label htmlFor={elementId} className={classNames({ active: isActive })}>
        {label}
      </label>

      <input
        type='checkbox'
        id={elementId}
        title={label}
        checked={isActive}
        onChange={handleChange}
      />
    </div>
  );
};

export default Toggle;
