import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import SelectBox from '~/components/common/SelectBox';
import { MachiningMethodType, MaterialType, MACHINING_METHOD, MATERIAL } from '~/constants/type';
import { requestActions } from '~/store/client/request';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const machiningMethodList = [MACHINING_METHOD.MILLING, MACHINING_METHOD.LEDGE];
  const materialList = [
    MATERIAL.ALUMINUM,
    MATERIAL.CARBON_STEEL,
    MATERIAL.COPPER,
    MATERIAL.ALLOY_STEEL,
    MATERIAL.STEEL,
  ];

  const handleMachiningMethod = ({
    currentTarget: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      requestActions.setMachiningMethod({
        value: value as MachiningMethodType,
        isActive: checked,
      }),
    );
  };

  const handleMaterial = ({ currentTarget: { value, checked } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      requestActions.setMaterial({
        value: value as MaterialType,
        isActive: checked,
      }),
    );
  };

  return (
    <div className='request-top'>
      <SelectBox
        label='가공방식'
        optionList={machiningMethodList}
        onChange={handleMachiningMethod}
      />
      <SelectBox label='재료' optionList={materialList} onChange={handleMaterial} />
    </div>
  );
};

export default SearchFilter;
