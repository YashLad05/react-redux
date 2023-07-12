// Reducer - How to perform Action

// We know that there will be only 1 root reducer,
// So that is defined in index file of redicers folder

import ChnageTheNumber from "./upDown";

// To keep multiple reducers at one place,
// We need to combine them.
// we use the object method.
import { combineReducers } from "redux";

// Now comes only one Root Reducer
const rootReducer = combineReducers({
    ChnageTheNumber: ChnageTheNumber, // An Object has key value pairs

})

export default rootReducer;
// This Root Reducer will be added to Redux Store
