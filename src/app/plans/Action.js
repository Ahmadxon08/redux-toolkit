/* eslint-disable no-undef */
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./ActionTypes";
export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
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
export const filterTodo = (filter) => {
  return {
    type: FILTER_TODO,
    payload: { filter },
  };
};
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const upDateSearchTerm = (term) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: { term },
  };
};
