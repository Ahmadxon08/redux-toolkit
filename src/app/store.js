import { createStore } from "redux"
import todoReducer from './plans/Reducer';

const store = createStore(todoReducer)

export default store;