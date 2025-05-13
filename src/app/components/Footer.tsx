"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.8rem;
  }
`;

export default function Footer() {
  return <StyledFooter>© 2025 Styled Todo App</StyledFooter>;
}

