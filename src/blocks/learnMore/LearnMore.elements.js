import styled from "styled-components"
import cityBg from './cityLearn.png'

export const Container = styled.div`
    width: 100%;
    padding-top: 20px;
    background-color: #100A1E;
    padding-top: 30px;

`


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
`
export const Title = styled.h2`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        @media screen and (max-width: 416px){
            font-size: 20px;
        }
`
export const LearnContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
flex-direction:column;
align-items: center;
position: relative;
margin-bottom: 70px;
@media screen and (max-width: 928px){
    position: static;
        }
    
`
export const LearnItemRight = styled.div`
display: flex;
margin-bottom: 50px;
`
export const LearnItemLeft = styled.div`

`
export const StarsRight = styled.img`
width: 159px;
height: 130px;
position: absolute;
top: -50%;
left: 75%;
@media screen and (max-width: 933px){
            display: none;
        }
`
export const BackgroundImgCity = styled.div`
    background-image: url('${cityBg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    padding-bottom: 550px;
`
export const StarsLeft = styled.img`
width: 159px;
height: 130px;
position: absolute;
top: 0%;
left: 11%;
@media screen and (max-width: 933px){
            display: none;
        }
`
export const Text = styled.p`
    font-size: 25px;
    font-family: 'VT323';
    color: #fff;
    width: 400px;
    text-align: center;
    @media screen and (max-width: 438px){
            width: 100%;
        }
`