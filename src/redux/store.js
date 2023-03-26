import { createStore   } from 'redux';   // za stworzenie magazynu odpowiada funkcja 'crateStore
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import initialState from './initialState';

//selectors
/*  Funkcje, które mają pomagać nam w przygotowywaniu danych z centrali, będziemy nazywać selektorami
(z ang. select = wybierać). Wynika to oczywiście z roli jaką pełnią funkcję,
którą jest wybranie odpowiednich danych. */
export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));  /* id to parametr id z identyfikatorem kolumny. Staramy się wziąć więc ze state.cards (wszystkich kart) tylko te karty, których właściwość columnId jest zgodna właśnie z daną kolumną */
//export const getAllColumns = ( state ) => state.columns;
export const getColumnsByList = ({ columns }, listId ) => columns.filter(column => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = ( state ) => state.lists;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchInput = payload => ({ type: 'UPDATE_SEARCHINPUT', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHINPUT':
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

const store = createStore  (
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;