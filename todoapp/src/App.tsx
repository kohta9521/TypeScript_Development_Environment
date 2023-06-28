import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [ inputValue, setInputValue ] = useState(" ");
  // 空の配列の型指定
  const [ todos, setTodos  ] = useState<Todo[]>([]);


  // TSの型指定
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // ページのリロード拒否
    e.preventDefault();

    // 新しいTODOを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {

  }

  return (
    <div className="App">
      <div>
        <h2>TodoList with TypeScript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              {/* {todo.inputValue} */}
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className="inputText" value={todo.inputValue} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
