import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrPowerReset } from 'react-icons/gr';
import { SelectBox, Toggle } from '~/components/common/filter';
import { MachiningMethodType, MaterialType, MACHINING_METHOD, MATERIAL } from '~/constants/type';
import { requestActions, requestFilterSelector } from '~/store/client/request';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { machiningMethodList, materialList } = useSelector(requestFilterSelector);

  const isFiltering = machiningMethodList.length > 0 || materialList.length > 0;

  const machiningMethodOptionList = [MACHINING_METHOD.MILLING, MACHINING_METHOD.LEDGE];
  const materialOptionList = [
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

  const handleResetFilterList = () => {
    dispatch(requestActions.resetFilterList());
  };

  const handleHiddenWaiting = (isActive: boolean) => {
    dispatch(requestActions.setHiddenWaiting(isActive));
  };

  return (
    <div className='request-top'>
      <SelectBox
        label='가공방식'
        optionList={machiningMethodOptionList}
        selectedList={machiningMethodList}
        onChange={handleMachiningMethod}
      />

      <SelectBox
        label='재료'
        optionList={materialOptionList}
        selectedList={materialList}
        onChange={handleMaterial}
      />

      {isFiltering && (
        <button type='button' className='filter-reset' onClick={handleResetFilterList}>
          <GrPowerReset />
          <span>필터링 리셋</span>
        </button>
      )}

      <Toggle label='상담 중인 요청만 보기' onChange={handleHiddenWaiting} />
    </div>
  );
};

export default SearchFilter;
