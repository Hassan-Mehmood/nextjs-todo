'use client';
import React, { useEffect, useState } from 'react';

// const [todos, setTodos] = useState<string[]>(() => {
//   const data = localStorage.getItem('todos');
//   return data ? JSON.parse(data) : [];
// });

// console.log('localdata', localData);
// console.log('parsedData', JSON.parse(localData));

const Form = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('todos');
    if (localData) {
      setTodos(JSON.parse(localData));
      console.log('here');
    }
  }, []);

  useEffect(() => {
    // if(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('todos effect');
  }, [todos]);

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue.trim() === '') {
      console.log('empty');
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={addTodo} className="flex flex-col items-center gap-4 border p-4">
        <label htmlFor="todo">Add a todo</label>
        <input
          type="text"
          id="todo"
          className="text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </section>
    </>
  );
};

export default Form;
