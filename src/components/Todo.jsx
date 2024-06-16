import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import TodoItems from "./TodoItems";
import toast from "react-hot-toast";

const Todo = () => {
  const [todoList, setTodolist] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const input = inputRef.current.value.trim();

    if (input === "") {
      return null;
    }

    const NewTodo = {
      id: Date.now(),
      text: input,
      isComplete: false,
    };

    setTodolist((prev) => [...prev, NewTodo]);
    toast.success("Task Added Successfully");
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodo) => {
      toast.error("Deleted Task Successfully");
      return prevTodo.filter((item) => item?.id !== id);
    });
  };

  const toggle = (id) => {
    setTodolist((prevTodo) => {
      return prevTodo.map((item) => {
        if (item?.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-black place-self-center w-11/12 max-w-screen-md flex flex-col p-4 md:p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-4 md:mt-7 mb-4 md:mb-7 gap-4">
        <FaRegCalendarPlus color="white" size={30} />
        <h1 className="text-white font-semibold text-xl md:text-3xl">
          To Do List
        </h1>
      </div>

      <div className="flex items-center mb-4 md:mb-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-12 md:h-14 pl-4 md:pl-6 pr-2 placeholder:text-slate-600 text-sm md:text-base"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-red-600 w-24 md:w-32 h-12 md:h-14 text-white text-sm md:text-lg font-semibold cursor-pointer"
        >
          Add +
        </button>
      </div>

      {todoList.length === 0 ? (
        <p className="text-white text-center mt-4 md:">
          No Task Available
        </p>
      ) : (
        <div>
          {todoList?.map((item, index) => (
            <TodoItems
              key={index}
              text={item?.text}
              id={item?.id}
              isComplete={item?.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
