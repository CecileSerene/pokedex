import styled from 'styled-components';

export const Title = styled.p`
    font-size: 1.5em;
    text-align: center;
    font-family: Pokemon classic;
`;

export const Card = styled.div`
    border: double 5px black;
    width: 300px;
    height: 300px;
`;

export const Attribute = styled.p`
    font-size: 12px;
    text-align: center;
    font-family: Pokemon classic;
`;

export const Sprite = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
`;

export const AvatarButton = styled.button`
    border: None;
    background-color: white;
    &:hover {
        background-color: #e6e6e6;
    }
`;
