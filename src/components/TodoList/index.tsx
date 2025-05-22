
'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import TodoItem from '../TodoItem';

type Todo = {
  id: string;
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
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodos([
        ...todos,
        { id: crypto.randomUUID(), text: newTodoText.trim(), completed: false },
      ]);
      setNewTodoText('');
    }
  };

  const saveTodo = (id: string) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updated);
    setEditId(null);
  };

  const deleteTodo = (id: string) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  };

  const toggleComplete = (id: string) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const filteredTodos = showCompleted
    ? todos.filter(t => t.completed)
    : todos.filter(t => !t.completed);

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
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={editId === todo.id}
            editText={editText}
            onEditChange={setEditText}
            onSave={() => saveTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleComplete(todo.id)}
            onEditStart={() => {
              setEditId(todo.id);
              setEditText(todo.text);
            }}
          />
        ))}
      </TodoListWrapper>

      <Button
        $variant="primary"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? 'Show Active' : 'Show Completed'}
      </Button>
    </Container>
  );
}
