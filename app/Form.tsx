'use client';
import React, { useEffect, useState } from 'react';
import { BsCheckLg, BsFillTrashFill } from 'react-icons/bs';
import crypto from 'crypto';
// console.log('localdata', localData);
// console.log('parsedData', JSON.parse(localData));

type TodoType = {
  id: string;
  name: string;
  complete: boolean;
};

const Form = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const id = crypto.randomBytes(16).toString('hex');

    setTodos([...todos, { id: id, name: inputValue, complete: false }]);
    setInputValue('');
  }

  function deleteTodo(id: string) {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodo);
  }

  function completeTodo(id: string) {
    const todosArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(todosArray);
  }

  return (
    <>
      <form onSubmit={addTodo} className="flex flex-col items-center gap-4  rounded-sm  p-4">
        <label htmlFor="todo">Add a todo</label>
        <input
          type="text"
          id="todo"
          className="text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="border rounded-md py-1 px-3 hover:bg-slate-600 hover:text-slate-50"
        >
          Add todo
        </button>
      </form>
      <section className="container pt-5">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`border min-w-[200px] w-1/4 px-3 flex justify-between py-1 m-4 mx-auto ${
              todo.complete === true ? 'bg-green-300' : ''
            }`}
          >
            <p>{todo.name}</p>
            <div>
              <button>
                <BsCheckLg onClick={() => completeTodo(todo.id)} />
              </button>
              <button className="ml-4">
                <BsFillTrashFill onClick={() => deleteTodo(todo.id)} />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Form;
