import { apiConverter, mockResolve } from '~/api/utils';
import { api } from '~/api/apiBase';
import { getRequestListResponse } from '~/api/mock/client/request';

const realApi = {
  // Sample
  getRequestList: () => api.get('/client/request'),
};

const mockApi = {
  getRequestList: () => mockResolve(getRequestListResponse),
};

export const requestApi = {
  getRequestList: () => apiConverter(realApi.getRequestList, mockApi.getRequestList),
};
