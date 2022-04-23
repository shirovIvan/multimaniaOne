import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #000B2C;
    overflow: hidden;
    padding-bottom: 20px;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;

`

export const FooterMenuItems = styled.ul`
    margin-top: 98px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media screen and (max-width: 787px){
        margin-top: 50px;
    }
`
export const FooterMenuItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    font-family: 'Press Start 2P';
    padding: 10px;
    cursor: pointer;
    transition: 0.3s all ease;
    &:hover{
        color: #A2275C;
    }
    @media screen and (max-width: 900px){
        font-size: 15px;
    }
    @media screen and (max-width: 477px){
        font-size: 13px;
    }
`
export const SubMenuItems = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 376px){   
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const SubMenuItem = styled.div`
    font-size: 25px;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    @media screen and (max-width: 647px){
        font-size: 20px;
    }
    transition: 0.3s all ease;
    &:hover{
        color: #A2275C;
    }
`
export const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
export const FooterIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media screen and (max-width: 647px){
        margin-top: 30px;
    }
`
export const BtnWrapper = styled.div`
    padding: 0 5px;
`
export const FooterLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
export const FooterLogoImg = styled.img`

`