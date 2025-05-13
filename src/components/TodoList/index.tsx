'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';



type Todo = {
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]); //Stores the list of all todo items.
  const [editIndex, setEditIndex] = useState<number | null>(null);// is being edited and what its current value is.
  const [editText, setEditText] = useState('');
  const [newTodoText, setNewTodoText] = useState('');//what the user types in the input field
  const [showCompleted, setShowCompleted] = useState(false);//you show completed or active todos.

}
