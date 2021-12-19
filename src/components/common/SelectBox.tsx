import { ChangeEvent, FC, useState } from 'react';
import classNames from 'classnames';
import { v4 } from 'uuid';

interface Props {
  label: string;
  optionList: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBox: FC<Props> = ({ label, optionList, onChange: handleChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={classNames('select', { active: isActive })}>
      <button type='button' className='select-btn' onClick={handleClick}>
        {label}
      </button>

      <div className='select-option-box'>
        {optionList.map((option) => {
          const elementId = v4();
          return (
            <div className='select-option-item' key={option}>
              <label htmlFor={elementId}>{option}</label>
              <input type='checkbox' id={elementId} value={option} onChange={handleChange} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectBox;
