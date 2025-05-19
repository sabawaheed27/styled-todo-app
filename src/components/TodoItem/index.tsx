'use client';

import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

type Todo = {
  text: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  index: number;
  editIndex: number | null;
  editText: string;
  onEditChange: (value: string) => void;
  onSave: (index: number) => void;
  onDelete: (index: number) => void;
  onToggle: (index: number) => void;
  onEditStart: (index: number, text: string) => void;
};

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  font-size: 1rem;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;


const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

export default function TodoItem({ todo, index, editIndex, editText, onEditChange, onSave, onDelete, onToggle, onEditStart,
}: Props) {
  return (
    <TodoItemWrapper>
      {editIndex === index ? (
        <>
          <Input
            type="text"
            value={editText}
            onChange={(e) => onEditChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSave(index)}
          />
          <ButtonGroup>
            <Button variant="success" onClick={() => onSave(index)}>Save</Button>
            <Button variant="danger" onClick={() => onDelete(index)}>Delete</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <TodoText $completed={todo.completed}>{todo.text}</TodoText>
          <ButtonGroup>
            <Button variant="primary" onClick={() => onToggle(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button variant="warning" onClick={() => onEditStart(index, todo.text)}>
              Edit
            </Button>
          </ButtonGroup>
        </>
      )}
    </TodoItemWrapper>
  );
}

