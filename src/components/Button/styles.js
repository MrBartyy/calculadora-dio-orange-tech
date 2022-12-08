import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #b8c0ff;;
    background-color: #c8b6ff;
    color:#22223b;
    font-weight: 700;
    font-family: 'Roboto';
    font-size: 24px;
    flex: 1;
    border-radius: ${props => props.theme.main};
    
    ${({ variant }) => variant !== "inside" && css`
            border-radius: 0px 0px 10px 10px;
        `}

    &:hover{
        opacity: 0.9;
        border: 1px solid #ffd6ff;
    }
`
