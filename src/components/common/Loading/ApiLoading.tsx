import { FC } from 'react';
import { useSelector } from 'react-redux';
import { loadingTypeListSelector } from '~/store/common/loading';

export const ApiLoading: FC<{ actionType: string }> = ({ actionType }) => {
  const loadingTypeList = useSelector(loadingTypeListSelector);

  const isLoading = loadingTypeList.includes(actionType);

  return isLoading ? (
    <div className='loading'>
      <div className='loading-spinner'>loading</div>
    </div>
  ) : null;
};
