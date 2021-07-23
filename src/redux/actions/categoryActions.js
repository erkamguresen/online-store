import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    // let url = "http://localhost:3000/categories";
    let url =
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-categories/incoming_webhook/webhook-get-categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
