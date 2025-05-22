'use client';

import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  isEditing: boolean;
  editText: string;
  onEditChange: (text: string) => void;
  onSave: () => void;
  onDelete: () => void;
  onToggle: () => void;
  onEditStart: () => void;
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

export default function TodoItem({
  todo,
  isEditing,
  editText,
  onEditChange,
  onSave,
  onDelete,
  onToggle,
  onEditStart,
}: TodoItemProps) {
  return (
    <TodoItemWrapper>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={editText}
            onChange={(e) => onEditChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSave()}
          />
          <ButtonGroup>
            <Button $variant="success" onClick={onSave}>Save</Button>
            <Button $variant="danger" onClick={onDelete}>Delete</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <TodoText $completed={todo.completed}>{todo.text}</TodoText>
          <ButtonGroup>
            <Button $variant="primary" onClick={onToggle}>
              {todo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button $variant="warning" onClick={onEditStart}>
              Edit
            </Button>
          </ButtonGroup>
        </>
      )}
    </TodoItemWrapper>
  );
}
