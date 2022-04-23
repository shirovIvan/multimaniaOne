import styled from "styled-components"
import backgroundOut from './backgroundOut.png'
import cityBg from './cityBg.png'

export const Container = styled.div`
    width: 100%;
    background: rgb(27,20,50);
background: linear-gradient(0deg, rgba(27,20,50,1) 76%, rgba(4,29,45,1) 100%);
    overflow: hidden;
`
export const BackgroundImg = styled.div`
        background-image: url('${backgroundOut}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0 -200px;
        background-clip: text;
        @media screen and (max-width: 1199px){
            background-position: 0px 0px; 
        }
        @media screen and (max-width: 1199px){
            background-position: 0px 0px; 
        }
`
export const BackgroundImgCity = styled.div`
    background-image: url('${cityBg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    padding-bottom: 427px;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;

`
export const WrapperFighters = styled.div`
    padding-top: 300px;
    @media screen and (max-width: 1199px){
        padding-top: 200px;
        }
        @media screen and (max-width: 900px){
        padding-top: 100px;
        }
        @media screen and (max-width: 416px){
        padding-top: 50px;
        }
`
export const FighterBlockYang = styled.div`
    display: flex;
    justify-content:space-between ;
    margin-top: 80px;
    @media screen and (max-width: 1325px){
        padding: 0 20px;
    }
    @media screen and (max-width: 825px){
        padding: 0px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const FighterBlockLing = styled.div`
    display: flex;
    justify-content:space-between ;
    margin-top: 80px;
    flex-direction: row;
    @media screen and (max-width: 1325px){
        padding: 0 20px;
    }
    @media screen and (max-width: 825px){
        padding: 0px;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`
export const FighterSupplyText = styled.h2`
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    text-transform: uppercase;
    color: #FFF200;
    @media screen and (max-width: 1192px){
        font-size: 15px;
    }
    @media screen and (max-width: 825px){
        text-align: center;
        margin-bottom: 20px;
    }
`
export const FighterDiscriptionText = styled.div`
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    width: 750px;
    margin-bottom: 35px;
    color: #fff;
    text-align: left;
    width: 65.85%;
    @media screen and (max-width: 1192px){
        font-size: 15px;
    }
    @media screen and (max-width: 997px){
        width: 80%;
    }
    @media screen and (max-width: 825px){
        margin: 0 auto;
        text-align: center;
    }
`
export const FighterValue = styled.ul`
    @media screen and (max-width: 825px){
        margin: 20px auto;
    }
`
export const FighterValueLi = styled.li`
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    margin-bottom: 15px;


    @media screen and (max-width: 1325px){
        font-size: 20px;
        line-height: 100%;
    }
    @media screen and (max-width: 500px){
        padding: 0 20px;
        font-size: 17px;
    }
    
`
export const CoinImg = styled.img`
    width: 30px;
    margin-right: 15px;
    @media screen and (max-width: 1325px){
        width: 20px;
        margin-right: 10px;
    }
`
export const FighterImg = styled.img`
    width: auto;
    @media screen and (max-width: 1325px){
        width: 320px;
    }
    @media screen and (max-width: 900px){
        width: 250px;
    }
`
export const FighterBlockImgYang = styled.div`
    margin-right: 130px;
    @media screen and (max-width: 1325px){
        margin-right: 100px;
    }
    @media screen and (max-width: 900px){
        margin-right: 50px;
    }
    @media screen and (max-width: 825px){
        margin-right: 0px;
    }
`
export const FighterBlockImgLing = styled.div`
    margin-left: 130px;
    @media screen and (max-width: 1325px){
        margin-left: 100px;
    }
    @media screen and (max-width: 900px){
        margin-left: 50px;
    }
    @media screen and (max-width: 825px){
        margin-left: 0px;
    }
`
export const FighterBlockDiscription = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (max-width: 1325px){
        margin-top: 35px;
    }
    @media screen and (max-width: 825px){
        justify-content: center;
    }
`
export const KnowMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 140px;
    margin-bottom: 50px;
    @media screen and (max-width: 1192px){
        margin-top: 100px;
        margin-left: 35px;
    }
    @media screen and (max-width: 485px){
        margin-top: 50px;
        margin-left: 0;
        flex-direction: column;
    }

`
export const KnowMoreImg = styled.img`
    width: 70px;
    margin-right: 15px;
    @media screen and (max-width: 1192px){
        width: 50px;
        margin-right: 10px;
    }
    @media screen and (max-width: 849px){
        width: 40px;
    }
    @media screen and (max-width: 485px){
    }
`
export const BtnWrapper = styled.a`
    @media screen and (max-width: 849px){
        padding-right: 30px;
    }
`
export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    @media screen and (max-width: 1192px){
        margin-right: 25px;
    }
    @media screen and (max-width: 600px){
        margin-right: 15px;
    }
    @media screen and (max-width: 485px){
        margin-bottom: 20px;
    }

`
const theme = {
    pink: {
        default: '#A2275C',
        hover: '#8227A2',
        focus: '#8227A2',
        padding: '17px 26px;',
        boxShadowDefault: '4px 0px 0px 0px #802049, -4px 0px 0px 0px #E43A84, 0px  4px 0px 0px #802049, 0px -4px 0px 0px #E43A84;',
        boxShadowHover: '4px 0px 0px 0px #5B2080, -4px 0px 0px 0px #C23AE4, 0px  4px 0px 0px #5B2080, 0px -4px 0px 0px #C23AE4;',
        boxShadowFocus: '4px 0px 0px 0px #C23AE4, -4px 0px 0px 0px #5B2080, 0px  4px 0px 0px #C23AE4, 0px -4px 0px 0px #5B2080;',
        margin: '0px'
    },
}
export const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: #fff;
    padding: ${props => theme[props.theme].padding};
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    transition: ease all 0.3s;
    font-size: 18px;
    box-shadow: ${props => theme[props.theme].boxShadowDefault};
    margin: ${props => theme[props.theme].margin};
    &:hover{
        background-color: ${props => theme[props.theme].hover};
        box-shadow: ${props => theme[props.theme].boxShadowHover};
    }
    &:focus{
        background-color: ${props => theme[props.theme].focus};
        box-shadow: ${props => theme[props.theme].boxShadowFocus};
    }
    @media screen and (max-width: 974px){
        font-size: 10px;
    }
    @media screen and (max-width: 605px){
        font-size: 8px;
        line-height: 12px;
    }
`   
Button.defaultProps = {
    theme : 'pink' | 'purple' | 'mint' | 'brown' | 'icon',
}