import * as actionTypes from "./actionTypes";
// import parseBJSON from "../../logic/parseBJSON.js";

const postDBHookUrl =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/insert-product";
const updateDBHookUrl =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/webhook-update-product";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(prodcut) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: prodcut };
}

export function updateProductApi(product) {
  return fetch(updateDBHookUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function insertNewProductApi(product) {
  return fetch(postDBHookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  product.unitPrice = parseInt(product.unitPrice);
  product.unitsInStock = parseInt(product.unitsInStock);

  if (product.id) {
    return function (dispatch) {
      return updateProductApi(product)
        .then((savedProduct) => {
          product.id
            ? dispatch(updateProductSuccess(savedProduct))
            : dispatch(createProductSuccess(savedProduct));
        })
        .catch((error) => {
          throw error;
        });
    };
  } else {
    product.id = 666;
    // getNewProductId();

    return function (dispatch) {
      return insertNewProductApi(product)
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
        // let formattedData = parseBJSON(result);

        // if (categoryId) {
        //   formattedData = formattedData.filter(
        //     (product) => product.categoryId === categoryId
        //   );
        // }

        // return dispatch(getProductSuccess(formattedData));

        result.sort((a, b) => a.id - b.id);

        return dispatch(getProductSuccess(result));
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
