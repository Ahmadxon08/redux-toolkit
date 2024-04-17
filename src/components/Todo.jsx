import { useState } from "react";
import { BsPlusSquareDotted, BsSearch } from "react-icons/bs"; // Import the BsSearch icon
import { useDispatch } from "react-redux";
import { addToDO, upDateSearchTerm } from "./../app/plans/Action";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Corrected syntax

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addToDO(newTodo.trim()));
      setNewTodo("");
    }
  };

  const handleSearch = () => {
    dispatch(upDateSearchTerm(searchTerm));
  };

  return (
    <div className="max-w-7xl mx-auto sm:mt-8 p-4 bg-gray-100">
      <h2 className="mt-2 mb-3 text-2xl font-bold text-center uppercase">
        Personal Todo App
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="addTodoInfo"
          id="addTodoInfo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add Todo Action"
          className="flex-grow p-2 outline-none border-b-2 border-gray-400 focus:border-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="ml-4 p-1 text-3xl bg-blue-500 text-white rounded hover:bg-blue-500"
        >
          <BsPlusSquareDotted />
        </button>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="searchTodo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Todo"
          className="flex-grow p-2 outline-none border-b-2 border-gray-400 focus:border-blue-400"
        />
        <button
          onClick={handleSearch}
          className="ml-4 p-1 text-3xl bg-blue-500 text-white rounded hover:bg-blue-500"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Todo;
