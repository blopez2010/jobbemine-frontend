import { tabActionTypes } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setActiveTab = (route, tabIndex) => (dispatch, _) => {
  const value = { route, tabIndex };

  return dispatch({
    type: tabActionTypes.SET_ACTIVE_TAB,
    value,
  });
};
