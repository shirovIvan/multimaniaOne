import styled from "styled-components";
import backgroundOut from './back.png'


export const BackgroundImg = styled.div`
        background-image: url('${backgroundOut}');
        background-size: contain;
        background-repeat: no-repeat;
        background-clip: text;
        background-position: 0 200px;
        @media(max-width: 1508px){
            background-position: 0 300px;
        }
        @media(max-width: 1100px){
            background-position: 0 400px;
        }
        @media(max-width: 762px){
            background-position: 0px 700px; 
        }
        @media(max-width: 468px){
            background-position: 0px 805px; 
        }
`

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(0deg, rgba(27,20,50,1) 76%, rgba(4,29,45,1) 100%);
    margin-bottom: 170px;    
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 170px;  
`
export const BlockWrapper = styled.div`
        padding: 150px 0;
        display: flex;
        justify-content: space-around;
        @media(max-width: 762px){
            flex-direction: column;
        }
        @media(max-width: 762px){
            padding: 0;  
        }
`
export const NftBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 762px){
        margin-bottom: 30px;
    }
`
export const NftImg = styled.img`
    width: 400px;

    @media(max-width: 894px){
        width: 300px;
    }

    
`

export const BlockNft = styled.div`
display: flex;
justify-content: center;
align-items: center;  
flex-direction: column;

`
export const SubTitle = styled.div`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        margin-top: 45px;
        @media screen and (max-width: 1192px){
            font-size: 25px;
            text-shadow: 0px -3px 0px #A2275C;
        }
        @media screen and (max-width: 1192px){
            font-size: 18px;
        }
        @media screen and (max-width: 850px){
            font-size: 13px;
        }
        @media screen and (max-width: 600px){
            font-size: 10px;
            text-shadow: 0px -2px 0px #A2275C;
        }
`
export const Total = styled.div`
    margin-top: 30px;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    margin-bottom: 45px;
    color: #fff;
    text-align: center;
`

export const BlockCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Counter = styled.div`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
`
export const CounterDec = styled.div`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        margin-right: 40px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            color: #A2275C; 
            text-shadow: 0px -5px 0px #FFFFFF;
        }
`
export const CounterInc = styled.div`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        margin-left: 40px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            color: #A2275C; 
            text-shadow: 0px -5px 0px #FFFFFF;
        }
`
export const BtnWrapper = styled.div`
    margin-top: 70px;
`
export const SaleStatus = styled.div`
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px -5px 0px #A2275C;
        margin-top: 40px;
        @media(max-width: 420px){
        font-size: 20px;
    }
`