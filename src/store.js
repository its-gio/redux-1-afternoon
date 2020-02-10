import { createStore } from "redux";

const initialState = {
  recName: "",
  recCategory: ""
}

export const update_recName = "update_recName";
export const update_recCategory = "update_recCategory";

function reducer(state=initialState, action) {
  switch(action.type) {
    case update_recName:
      return {
        ...state,
        recName: action.payload
      }
    case update_recCategory:
      return {
        ...state,
        recCategory: action.payload
      }
    default: return state;
  }
}

export default createStore(reducer);