'use client';

import styled from 'styled-components';
//This component expects to receive a children prop, and it can be anything React can render.
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  bg?: string;
  type?: 'button' | 'submit';
};

const StyledButton = styled.button<{ bg?: string }>`
  padding: 0.5rem 1rem;
  background-color: #e91e63;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Button({ children, ...props}: ButtonProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}
