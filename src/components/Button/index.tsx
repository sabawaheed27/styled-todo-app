'use client';

import styled from 'styled-components';

type ButtonProps = {
  $variant?: 'primary' | 'success' | 'danger' | 'warning';
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return '#4caf50';
      case 'danger':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      default:
        return '#2196f3'; // primary
    }
  }};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

export default function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { $variant?: ButtonProps['$variant'] }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
