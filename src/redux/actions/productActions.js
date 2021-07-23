import * as actionTypes from "./actionTypes";
import parseBJSON from "../../logic/parseBJSON.js";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(prodcut) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: prodcut };
}

export function saveProductApi(product) {
  return fetch(
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/webhook-get-products" +
      (product.id || ""),
    {
      method: product.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url =
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/webhook-get-products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    return fetch(url)
      .then((response) => {
        let result = response.json();

        return result;
      })
      .then((result) => {
        const formattedData = parseBJSON(result);
        return dispatch(getProductSuccess(formattedData));
      });
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
