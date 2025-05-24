"use client";

import styled from "styled-components"

const StyledHeader = styled.header`
background-color: #333;
color: white;
padding: 24px;
text-align: center;
`;

const StyledPageTitle = styled.h1`
margin: 24px;
font-size: 1.8rem;
color: #eef1ef;
text-align: center;

`;

export default function Header(){
    return(
        <StyledHeader>
            <StyledPageTitle>Todo App</StyledPageTitle>
        </StyledHeader>
    )
}