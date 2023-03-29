import { createStore, combineReducers    } from 'redux';   // za stworzenie magazynu odpowiada funkcja 'crateStore
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import initialState from './initialState';
import listsReducer from './listRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchInput: searchStringReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore  (
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;