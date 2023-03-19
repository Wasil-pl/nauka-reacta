import { createStore   } from 'redux';   // za stworzenie magazynu odpowiada funkcja 'crateStore
import shortid from 'shortid';
import initialState from './initialState';

/* W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
W Reduksie za całą obsługę danych, a więc dodawanie, modyfikacja, usuwanie itd., będzie odpowiadać jedna duża funkcja
Drugi argument przyjmuje z kolei informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku, a więc zawartość stanu będzie ulegała zmianie.
My wstawiliśmy tutaj na razie pustą tablicę columns, ale taki obiekt stanu w centrali może zawierać dowolną ilość elementów o dowolnych typach.
Podsumowując, tym krótkim kodem mówimy JS-owi: stwórz nowy magazyn, który jako dane startowe przyjmie obiekt z tablicą columns i daj mu dostęp do naszej funkcji reducer.
action to obiekt z właściwością type o wartości ADD_COLUMN
jeśli obiekt action ma właściwość type o wartości ADD_COLUMN, to my chcemy zwrócić jako nowy stan, obiekt, który ma zawartość starego stanu,
ale z jedną zmianą… columns ma być powiększone o nowy obiekt, który otrzymamy z właściwości newColumn obiektu action 
Jeśli jednak action.type będzie inne, no to zwrócimy state bez zmian.

  const reducer = (state, action) => {
    if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn]} // 'ADD_COLUMN' - Przyjęło się, że nazwy akcji powinny być pisane z dużych liter, a zamiast spacji należy używać “podłogi”.
    return state;
  };
*/

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
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