import { RECEIVE_PRODUCTS, SET_SELECTED_CATEGORY } from '../constants/ActionTypes'

const initialState = {
  allCategories: [],
  selectedCategories: []
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const uniqueCategories = action.products
      .map(obj => obj.category)
      .filter((item, pos, arr) => arr.indexOf(item) === pos);
      return {
        allCategories: uniqueCategories,
        selectedCategories: uniqueCategories
      }
    case SET_SELECTED_CATEGORY:
    return {
      ...state,
      selectedCategories: action.categories
    }
    default:
      return state
  }
}

export default categories;

export const getAllCategories = state => 
  state.allCategories

export const getSelectedCategories = state => 
  state.selectedCategories
