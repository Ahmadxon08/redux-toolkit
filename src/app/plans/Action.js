/* eslint-disable no-undef */
import {
  ADD_TODO,

  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  FILTER_TODO,
  UPDATE_SEARCH_TERM,
  TOGGLE_TODO,
  MARK_ALL_COMPLETED,
} from "./ActionTypes";
export const addToDO = (text) => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export const removeTodo = (filter) => {
  return {
    type: REMOVE_TODO,
    payload: { filter },
  };
};

export const markCompleted = (id) => {
  return {
    type: MARK_COMPLETED,
    payload: { id },
  };
};
export const markIncompleted = (id) => {
  return {
    type: MARK_INCOMPLETED,
    payload: { id },
  };
};
export const filterTodo = (id) => {
  return {
    type: FILTER_TODO,
    payload: { id },
  };
};
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const upDateSearchTerm= (term) => {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: { term }
    }
}