import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { call, takeLeading } from 'redux-saga/effects';
import { RequestResponse, RequestType } from '~/api/type/client/request';
import { requestApi } from '~/api/url/client/request';
import { MachiningMethodType, MaterialType, REQUEST_STATUS } from '~/constants/type';
import { RootState } from '~/store';
import { callApi, createAsyncAction } from '../utils';

interface SearchFilterAction<T> {
  value: T;
  isActive: boolean;
}

const TYPE = 'request';
export const requestActions = {
  getRequestListAsync: createAsyncAction<undefined, RequestResponse, unknown>(
    `${TYPE}/getRequestListAsync`,
  ),
  setMachiningMethod: createAction<SearchFilterAction<MachiningMethodType>>(
    `${TYPE}/setMachiningMethod`,
  ),
  setMaterial: createAction<SearchFilterAction<MaterialType>>(`${TYPE}/setMaterial`),
  setHiddenWaiting: createAction<boolean>(`${TYPE}/setHiddenWaiting`),
  resetFilterList: createAction(`${TYPE}/resetFilterList`),
};

const { getRequestListAsync, setMachiningMethod, setMaterial, setHiddenWaiting, resetFilterList } =
  requestActions;

export interface RequestInitState {
  list: RequestType[];
  searchFilter: {
    machiningMethodList: MachiningMethodType[];
    materialList: MaterialType[];
    isHiddenWaiting: boolean;
  };
}

export const requestInitState: RequestInitState = {
  list: [],
  searchFilter: {
    machiningMethodList: [],
    materialList: [],
    isHiddenWaiting: false,
  },
};

const handleFilterAction = <T extends MachiningMethodType | MaterialType>(
  state: T[],
  { isActive, value }: SearchFilterAction<T>,
) => {
  if (isActive) return [...state, value];
  return state.filter((item) => item !== value);
};

export const requestReducer = createReducer(requestInitState, (builder) =>
  builder
    .addCase(getRequestListAsync.success, (state, { payload }) => ({
      ...state,
      list: [...state.list, ...payload.requests],
    }))
    .addCase(setMachiningMethod, (state, { payload }) => {
      state.searchFilter.machiningMethodList = handleFilterAction(
        state.searchFilter.machiningMethodList,
        payload,
      );
    })
    .addCase(setMaterial, (state, { payload }) => {
      state.searchFilter.materialList = handleFilterAction(
        state.searchFilter.materialList,
        payload,
      );
    })
    .addCase(setHiddenWaiting, (state, { payload }) => {
      state.searchFilter.isHiddenWaiting = payload;
    })
    .addCase(resetFilterList, (state) => {
      state.searchFilter.machiningMethodList = [];
      state.searchFilter.materialList = [];
    }),
);

export const requestSelector = (state: RootState) => state.client;
export const requestListSelector = createSelector([requestSelector], ({ request }) => {
  const { machiningMethodList, materialList, isHiddenWaiting } = request.searchFilter;
  let filteredRequestList = request.list;

  if (machiningMethodList.length > 0)
    filteredRequestList = filteredRequestList.filter((item) =>
      machiningMethodList.every((method) => item.method.includes(method)),
    );

  if (materialList.length > 0)
    filteredRequestList = filteredRequestList.filter((item) =>
      materialList.every((material) => item.material.includes(material)),
    );

  if (isHiddenWaiting)
    filteredRequestList = filteredRequestList.filter((item) => item.status !== REQUEST_STATUS.WAIT);

  return filteredRequestList;
});
export const requestFilterSelector = createSelector(
  [requestSelector],
  ({ request }) => request.searchFilter,
);

export function* getRequestListAsyncSaga() {
  try {
    yield call(callApi(getRequestListAsync), requestApi.getRequestList);
  } catch (e) {
    yield call(console.warn, e);
  }
}

export const requestSaga = [takeLeading(getRequestListAsync.index.type, getRequestListAsyncSaga)];
