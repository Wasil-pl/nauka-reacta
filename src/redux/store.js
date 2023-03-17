import { createStore   } from 'redux';   // za stworzenie magazynu odpowiada funkcja 'crateStore
import initialState from './initialState';

/* W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
W Reduksie za całą obsługę danych, a więc dodawanie, modyfikacja, usuwanie itd., będzie odpowiadać jedna duża funkcja
Drugi argument przyjmuje z kolei informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku, a więc zawartość stanu będzie ulegała zmianie.
My wstawiliśmy tutaj na razie pustą tablicę columns, ale taki obiekt stanu w centrali może zawierać dowolną ilość elementów o dowolnych typach.
Podsumowując, tym krótkim kodem mówimy JS-owi: stwórz nowy magazyn, który jako dane startowe przyjmie obiekt z tablicą columns i daj mu dostęp do naszej funkcji reducer */

const reducer = (state, action) => {
  return state;
};

const store = createStore  (
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;