import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(prodcut) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: prodcut };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url =
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/webhook-get-products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductSuccess(result)));
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  throw error;
}
