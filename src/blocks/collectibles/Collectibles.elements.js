import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    background-color: #1b0705;
    padding-top: 58px;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
`
export const CollectiblesItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    padding-top: 90px;
    @media screen and (max-width:1230px){
        justify-content: center;
    }
`

export const CollectiblesItemImg = styled.div`
    
`

export const CollectiblesImg = styled.img`
    margin-bottom: 20px ;
    @media screen and (max-width:1230px){
        margin-left: 20px;
    }
    
`