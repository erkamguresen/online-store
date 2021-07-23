import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  currentCategory: changeCategoryReducer,
  categoriesArray: categoryListReducer,
  products: productListReducer,
  cart: cartReducer,
});

export default rootReducer;
