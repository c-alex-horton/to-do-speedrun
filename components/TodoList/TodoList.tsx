import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const TodoListStyles = styled.div`
  .important {
    color: #ff8080;
  }
  .done {
    color: #707070;
    text-decoration: line-through;
  }
`;

const EntryStyles = styled.form`
  width: 80%;
  margin: 0 auto;
  textarea {
    width: 80%;
    resize: none;
    border-radius: 10px;
    background-color: #333340;
    border: none;
    color: #ddd;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.2em;
    padding: 15px;
    &:focus {
      outline: none;
    }
    min-height: 100px;
  }
`;

export default function TodoList() {
  const [entry, setEntry] = useState('')
  const [todos, setTodos] = useState([
    {
      text: 'This is a test todo',
      done: false,
      important: false,
    },
    {
      text: 'This is an important test todo',
      done: false,
      important: true,
    },
    {
      text: 'This is a completed test todo',
      done: true,
      important: true,
    },

  ]);


  const addTodo = (e: Event) => {
    e.preventDefault();
    setTodos([...todos, {
        text: 'new todo',
        done: false,
        important: false
    }])
  };

  return (
    <TodoListStyles>
      {todos.map((todo, i) => {
        return (
          <h1
            key={i}
            className={`${todo.important ? 'important' : ''} ${
              todo.done ? 'done' : ''
            }`}
          >
            {todo.text}
          </h1>
        );
      })}
      <EntryStyles>
        <textarea value={entry}/>
      </EntryStyles>
    </TodoListStyles>
  );
}
