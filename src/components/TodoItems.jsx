import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 md:my-4 gap-3 p-3 md:p-4 border rounded-xl">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        
        {isComplete ? (
          <FaRegCheckCircle color="white" size={24} className="w-6 md:w-7" />
        ) : (
          <MdRadioButtonUnchecked color="white" size={24} className="w-6 md:w-7" />
        )}
        <p
          className={`text-white ml-3 md:ml-5 text-base md:text-lg ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete Icon */}
      <MdDelete
        color="white"
        size={24}
        className="cursor-pointer"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </div>
  );
};

export default TodoItems;
