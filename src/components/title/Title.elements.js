import styled from "styled-components";

export const Container = styled.div`
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
`

export const Text = styled.h2`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        @media screen and (max-width: 1192px){
            font-size: 45px;
        }
        @media screen and (max-width: 1192px){
            font-size: 38px;
        }
        @media screen and (max-width: 850px){
            font-size: 33px;
        }
        @media screen and (max-width: 600px){
            font-size: 30px;
        }
        @media screen and (max-width: 416px){
            font-size: 20px;
        }
`