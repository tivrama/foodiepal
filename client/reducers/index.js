import * as A from '../actions';
import { combineReducers } from 'redux';

import Entry from './reducer-entry';
import Subcategories from './reducer-subcategory-list';

// This is actual state
import INITIAL_STATE from '../initialstate';

export default combineReducers({
  subcategories: Subcategories,
  entries: Entry
});