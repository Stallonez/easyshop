import { combineReducers, createStore } from "redux";
import cartDataReducer from "./cartData-reducer";
import notebooksDataReducer from "./notebookData-reducer";
import tabletsDataReducer from "./tabletsData-reducer";

let reducers = combineReducers({
    notebook_Data: notebooksDataReducer,
    tablet_Data: tabletsDataReducer,
    cart_Data: cartDataReducer,
})

let store = createStore(reducers);

export default store;