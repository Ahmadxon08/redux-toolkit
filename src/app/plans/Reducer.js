import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  FILTER_TODO,
  UPDATE_SEARCH_TERM,
  MARK_ALL_COMPLETED,
} from "./ActionTypes";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
  term: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload.id),
      };

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    case MARK_INCOMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };
    case FILTER_TODO:
      return {
        ...state,
        filter: state.filter,
      };

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: state.action.payload.term,
      };
    case  MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: true })),
      };
   

    default:
      return state;
  }
};

export default todoReducer;
