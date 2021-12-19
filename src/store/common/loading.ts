import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/store';

export interface LoadingInitialState {
  loadingCount: number;
  loadingActionList: string[];
}

const initialState: LoadingInitialState = {
  loadingCount: 0,
  loadingActionList: [],
};

// If using createSlice
const { actions, reducer } = createSlice({
  name: 'common/loading',
  initialState,
  reducers: {
    startLoading(state, { payload }: PayloadAction<string>) {
      state.loadingCount += 1;
      state.loadingActionList.push(payload);
    },
    endLoading(state, { payload }: PayloadAction<string>) {
      state.loadingCount -= 1;
      state.loadingActionList = state.loadingActionList.filter((type) => type === payload);
    },
    clearLoading(state) {
      state.loadingCount = 0;
      state.loadingActionList = [];
    },
  },
});

export const loadingSelector = (state: RootState) => state.common.loading;
export const isLoadingSelector = createSelector([loadingSelector], (state) => !!state.loadingCount);
export const loadingTypeListSelector = createSelector(
  [loadingSelector],
  (state) => state.loadingActionList,
);

export {
  actions as loadingActions,
  reducer as loadingReducer,
  initialState as loadingInitialState,
};
