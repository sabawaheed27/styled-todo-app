'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import TodoItem from '../TodoItem';

type Todo = {
  text: string;
  completed: boolean;
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
`;

const TodoListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]); //Stores the list of all todo items.
  const [editIndex, setEditIndex] = useState<number | null>(null);// is being edited and what its current value is.
  const [editText, setEditText] = useState('');
  const [newTodoText, setNewTodoText] = useState('');//what the user types in the input field
  const [showCompleted, setShowCompleted] = useState(false);//you show completed or active todos.

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);//Loads saved todos when the app first loads.

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);//Saves todos every time the list changes.

  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodos([...todos, { text: newTodoText.trim(), completed: false }]);
      setNewTodoText('');
    }
  };

  const saveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].text = editText;
    setTodos(newTodos);
    setEditIndex(null);
  };//Saves the edited text into the todo list.

  const deleteTodo = (index: number) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  const toggleComplete = (index: number) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const filteredTodos = showCompleted
    ? todos.filter((t) => t.completed)
    : todos.filter((t) => !t.completed);
  //
  return (
    <Container>
      <NewItem>
        <Input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo}>Add</Button>
      </NewItem>

      <TodoListWrapper>
        {todos.map((todo, index) => {
          if (showCompleted && !todo.completed) return null;
          if (!showCompleted && todo.completed) return null;

          return (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              editIndex={editIndex}
              editText={editText}
              onEditChange={setEditText}
              onSave={saveTodo}
              onDelete={deleteTodo}
              onToggle={toggleComplete}
              onEditStart={(i, text) => {
                setEditIndex(i);
                setEditText(text);
              }}
            />
          );
        })}

      </TodoListWrapper>

      <Button
        variant="primary"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? 'Show Active' : 'Show Completed'}
      </Button>
    </Container>
  );
}
