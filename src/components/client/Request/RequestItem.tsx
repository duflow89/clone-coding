import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RequestType } from '~/api/type/client/request';
import { REQUEST_STATUS } from '../../../constants/type';

const RequestItem: FC<{ item: RequestType }> = ({ item }) => {
  const { title, client, due, count, amount, method, material, status } = item;

  const generateUnit = (num: number) => (num ? `${num}개` : '-');

  const isConsulting = REQUEST_STATUS.CONSULT === status;

  return (
    <div className='request-item'>
      <div className='request-item-header'>
        <h3 className='request-item-subject'>{title}</h3>
        <div className='request-item-client'>{client}</div>
        {isConsulting && <div className='request-item-status consult'>{status}</div>}
        <div className='request-item-due'>{due}까지 납기</div>
      </div>

      <table className='request-item-summary'>
        <tbody>
          <tr>
            <th scope='row'>도면개수</th>
            <td>{generateUnit(count)}</td>
          </tr>
          <tr>
            <th scope='row'>총 수량</th>
            <td>{generateUnit(amount)}</td>
          </tr>
          <tr>
            <th scope='row'>가공방식</th>
            <td>{method && method.join(', ')}</td>
          </tr>
          <tr>
            <th scope='row'>재료</th>
            <td>{material && material.join(', ')}</td>
          </tr>
        </tbody>
      </table>

      <div className='request-item-buttons'>
        <Link to='#' className='button primary-button'>
          요청 내역 보기
        </Link>
        <Link to='#' className='button primary-bordered-button'>
          채팅하기
        </Link>
      </div>
    </div>
  );
};

export default RequestItem;
