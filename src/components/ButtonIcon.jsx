import React from 'react';
import styled from 'styled-components';
import { CatIcon } from './CatIcon';

const StyledButton = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export default function ButtonIcon ({color, text}) {
    return (
        <StyledButton>
            <CatIcon className="red" color={color} text={text}></CatIcon>
        </StyledButton>
    );
}