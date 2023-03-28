import { createStore, combineReducers    } from 'redux';   // za stworzenie magazynu odpowiada funkcja 'crateStore
import { strContains } from '../utils/strContains';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import initialState from './initialState';
import listsReducer from './listRedux';
import searchStringReducer from './searchStringRedux';

//selectors
/*  Funkcje, które mają pomagać nam w przygotowywaniu danych z centrali, będziemy nazywać selektorami
(z ang. select = wybierać). Wynika to oczywiście z roli jaką pełnią funkcję,
którą jest wybranie odpowiednich danych. */
export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));  /* id to parametr id z identyfikatorem kolumny. Staramy się wziąć więc ze state.cards (wszystkich kart) tylko te karty, których właściwość columnId jest zgodna właśnie z daną kolumną */
export const getColumnsByList = ({ columns }, listId ) => columns.filter(column => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = ( state ) => state.lists;
export const getFavoriteCards = ({ cards }) => cards.filter(cards => cards.isFavorite === true);

export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const updateSearchInput = payload => ({ type: 'UPDATE_SEARCHINPUT', payload });

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