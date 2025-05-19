'use client';

import styled from 'styled-components';



type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}


//<HTMLInputElement>
//This is telling TypeScript that you want these attributes specifically 
// for an HTML <input>, not a <textarea>, <select>, etc.

//<InputHTMLAttributes>
// It includes all standard HTML attributes for an <input> element—like type, 
// value, onChange, placeholder, disabled, etc.