import shortid from "shortid";

/* Oryginalny reducer przyjmował jako pierwszy argument cały state, a tutaj zakładamy, że otrzymujemy tylko konkretną część stanu i tylko konkretną część stanu zwracamy.
Stąd też ta nazwa argumentu (“statePart” to po polsku “część stanu”). */
const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;