import shortid from "shortid";

//selectors
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = ( state ) => state.lists;

//action
export const addList = payload => ({ type: ADD_LIST, payload });

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

/* Oryginalny reducer przyjmował jako pierwszy argument cały state, a tutaj zakładamy, że otrzymujemy tylko konkretną część stanu i tylko konkretną część stanu zwracamy.
Stąd też ta nazwa argumentu (“statePart” to po polsku “część stanu”). */
const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;