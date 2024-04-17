import { useDispatch, useSelector } from "react-redux"
import { filterTodo } from "../app/plans/Action";
import { markAllCompleted } from './../app/plans/Action';


const FilterButton = () => {
    const dispatch=useDispatch();
    const currentFilter=useSelector((state)=>state.filter);
    const handleFilterChange =(filter)=>{
        dispatch(filterTodo(filter))

    }

  return (
    <div className="flex space-x-5 items-center">
        <select
        value={currentFilter}
        onChange={(e)=>handleFilterChange(e.target.value)}
         className="text-sm px-2  p-2 rounded border border-gray-300 focus:outline-none" name="" id="">
            <option value="All">All</option>
            <option value="COMPLETED">Compeleted</option>
            <option value="INCOMPLETED">Incompeleted</option>
        </select>
        <button onClick={dispatch(markAllCompleted())} className="text-sm p-2 py-1 bg-orange-900 text-white" > Mark All Completed</button>
    </div>
  )
}

export default FilterButton