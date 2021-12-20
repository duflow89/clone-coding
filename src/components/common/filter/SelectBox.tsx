import { ChangeEvent, FC, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 } from 'uuid';
import useOutsideClick from '~/utils/hooks/useOutsideClick';

interface Props {
  label: string;
  optionList: string[];
  selectedList: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBox: FC<Props> = ({ label, optionList, selectedList = [], onChange: handleChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const isChecked = (value: string) => selectedList.includes(value);

  const handleClick = () => setIsActive((prev) => !prev);

  useOutsideClick(ref, () => setIsActive(false));

  return (
    <div ref={ref} className={classNames('filter-select', { active: isActive })}>
      <button type='button' className='filter-select-btn' onClick={handleClick}>
        {label}
      </button>

      <div className='filter-option'>
        {optionList.map((option) => {
          const elementId = v4();
          return (
            <div className='filter-option-item' key={option}>
              <label htmlFor={elementId}>{option}</label>

              <input
                type='checkbox'
                id={elementId}
                value={option}
                onChange={handleChange}
                checked={isChecked(option)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectBox;
