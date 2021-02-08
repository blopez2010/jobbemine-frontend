import { tabActionTypes } from '../../actions/actionTypes';

const initialState = {
  route: '',
  tabIndex: 0,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};

export default tabReducer;
