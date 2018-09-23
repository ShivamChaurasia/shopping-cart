import { RECEIVE_PRODUCTS, SET_SELECTED_CATEGORY } from '../constants/ActionTypes'

const initialState = {
  fetching: true,
  byId: {},
  visibleIds: []
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        fetching: false,
        byId: {
          ...action.products.reduce((obj, product) => {
            obj[product.id] = product
            return obj
          }, {})
        },
        visibleIds: action.products.map(product => product.id)
      }
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        visibleIds: Object.values(state.byId)
          .filter(obj => action.categories.includes(obj.category))
          .map(item => item.id)
      }
    default:
      return state
  }
}

export default products

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
