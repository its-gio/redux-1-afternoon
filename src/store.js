import { createStore } from "redux";

const initialState = {
  recName: "",
  recCategory: "",
  authFirstName: "",
  authLastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
}

export const update_recName = "update_recName";
export const update_recCategory = "update_recCategory";
export const update_authFirstName = "update_authFirstName";
export const update_authLastName = "update_authLastName";
export const add_ingredient = "add_ingredient";
export const add_instruction = "add_instruction";
export const add_recipe = "add_recipe";

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
    case update_authFirstName:
      return {
        ...state,
        authFirstName: action.payload
      }
    case update_authLastName:
      return {
        ...state,
        authLastName: action.payload
      }
    case add_ingredient:
      const newIngredient = [...state.ingredients, action.payload]
      return {
        ...state,
        ingredients: newIngredient
      }
    case add_instruction:
      const newInstructions = [...state.instructions, action.payload]
      return {
        ...state,
        instructions: newInstructions
      }
    case add_recipe:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe]
      return {
        ...state,
        ingredients: newRecipes
      }
    default: return state;
  }
}

export default createStore(reducer);