import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestActions, requestListSelector } from '~/store/client/request';
import Loading from '~/components/common/Loading';
import { loadingTypeListSelector } from '~/store/common/loading';
import SearchFilter from './SearchFilter';
import RequestItem from './RequestItem';

const Request = () => {
  const dispatch = useDispatch();
  const { getRequestListAsync } = requestActions;

  const requestList = useSelector(requestListSelector);
  const loadingTypeList = useSelector(loadingTypeListSelector);

  const isLoading = loadingTypeList.includes(getRequestListAsync.index.type);
  const isEmptyList = !requestList.length;

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

        {!isEmptyList && (
          <div className='request-list'>
            {requestList.map((item) => (
              <RequestItem item={item} key={item.id} />
            ))}
          </div>
        )}

        {!isLoading && isEmptyList && (
          <div className='empty-list'>조건에 맞는 견적 요청이 없습니다.</div>
        )}

        <Loading isLoading={isLoading} />
      </div>
    </>
  );
};

export default Request;
