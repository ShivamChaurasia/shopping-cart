import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
  });
};

export const addToCart = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const removeFromCart = productId => ({
  type: types.REMOVE_FROM_CART,
  productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: types.UPDATE_QUANTITY,
  productId,
  quantity,
});

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });

  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
  });
};

export const setSelectedCategories = categories => ({
  type: types.SET_SELECTED_CATEGORY,
  categories,
});
