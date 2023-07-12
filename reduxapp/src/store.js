// Now we have to create a Store
// and inside that, we will store the rootReducer

import {createStore} from "redux";

import rootReducer from "./reducers/index";

//Creating a store
const store = createStore(rootReducer);

// store >> Global and Centrlised Store
// rootReducer has all the states of application.

export default store;

// now we go to index.js of App
// This is very Important step
