import { combineReducers } from 'redux';
import tabReducer from './sub-reducers/tabReducer';

const rootReducer = combineReducers({ activeTabs: tabReducer });

export default rootReducer;
