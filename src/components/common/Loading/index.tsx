import { FC } from 'react';

const Loading: FC<{ isLoading: boolean }> = ({ isLoading }) =>
  isLoading ? (
    <div className='loading'>
      <div className='loading-spinner'>loading</div>
    </div>
  ) : null;

export default Loading;
