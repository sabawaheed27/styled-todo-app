'use client';

import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  type?: 'button' | 'submit';
};

const StyledButton = styled.button.attrs(({ type = 'button' }) => ({
  type,
})) <{ variant?: string }>`
  background: ${({ variant }) =>
    variant === 'primary' ? '#2196f3' :
    variant === 'danger' ? '#f44336' :
    variant === 'success' ? '#4caf50' :
    variant === 'warning' ? '#ff9800' :
    '#ccc'};

  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
export default function Button({ children, onClick, variant, type = "button" }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
}
