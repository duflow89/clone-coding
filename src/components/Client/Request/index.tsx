import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestActions, requestListSelector } from '~/store/client/request';
import { ApiLoading } from '~/components/common/Loading';
import SearchFilter from './SearchFilter';
import RequestItem from './RequestItem';

const Request = () => {
  const dispatch = useDispatch();
  const { getRequestListAsync } = requestActions;

  const requestList = useSelector(requestListSelector);

  useEffect(() => {
    dispatch(getRequestListAsync.index());
  }, []);

  return (
    <>
      <header className='content-header'>
        <h2 className='content-header-title'>들어온 요청</h2>
        <p className='content-header-info'>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      </header>

      <div className='request'>
        <SearchFilter />

        <ApiLoading actionType={getRequestListAsync.index.type} />

        <div className='request-list'>
          {requestList.length > 0 &&
            requestList.map((item) => <RequestItem item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Request;
