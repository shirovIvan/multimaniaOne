import styled from "styled-components";
import Border from '../../image/works/BorderImg.svg'
import backgroundOut from './back.png'

export const BackgroundImg = styled.div`
        background-image: url('${backgroundOut}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 150px;
        background-clip: text;     
`

export const Container = styled.div`
    width: 100%;
    background-color: #1B0705;
    padding-top: 308px;
    @media(max-width: 1024px){
        padding-top: 158px;
    }
    @media(max-width: 500px){
        padding-top: 108px;
    }
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
`
export const Blocks = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 1024px){
        margin-top: 70px;
    }
`
export const BlockWrapper = styled.div`
    border: solid;
    border-image-source: url(${Border});
    border-image-slice: 85%;
    border-image-width: 90%;
    padding: 50px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 3%;
    background-color: #1B0705;
    @media(max-width: 920px){
        height: 250px;
    }
    @media(max-width: 1024px){
        padding: 25px;
    }
    @media(max-width: 1362px){
        margin: 0 20px 0 20px;
    }
    @media(max-width: 420px){
        padding: 0px;
    }
    @media(max-width: 448px){
        height: 200px;
    }
`
export const BlockIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30%;
    @media(max-width: 374px){
        margin-right: 5%;
    }
`
export const BlockIconImg = styled.img`
    width: 100px;
    margin: 15px;
    cursor: pointer;
    @media(max-width: 1024px){
        margin: 5px;
    }
    @media(max-width: 1024px){
        width: 80px;
    }
    @media(max-width: 690px){
        width: 60px;
    }
`
export const BlockText = styled.div`
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    @media(max-width: 920px){
        font-size: 20px;
        line-height: 130%;
    }
    @media(max-width: 602px){
        font-size: 15px;
    }
    @media(max-width: 448px){
        font-size: 13px;
        line-height: 130%;
    }
`
export const BlockSlider = styled.div`
    position: absolute;
    top: -170px;
    left: 130px;
    @media(max-width: 1024px){
        top: -60px;
        left: 130px;
    }
    @media(max-width: 1024px){
        top: -60px;
        left: 130px;
    }
    @media(max-width: 920px){
        top: -10px;
        left: 130px;
    }
    @media(max-width: 690px){
        top: -10px;
        left: 100px;
    }
    @media(max-width: 602px){
        top:  0px;
        left: 100px;
    }
    @media(max-width: 602px){
        top:  0px;
        left: 100px;
    }
    @media(max-width: 505px){
        top:  25px;
        left: 100px;
    }
    @media(max-width: 449px){
        top:  0px;
        left: 100px;
    }
    @media(max-width: 420px){
        top:  0px;
        left: 70px;
    }
    @media(max-width: 374px){
        display: none;
    }
`
export const BlockSliderImg = styled.img`

`
export const IconArrowBlock = styled.div`
    position: absolute;
    top: 87%;
    left: 85%;
    @media(max-width: 1024px){
        top: 85%;
        left: 85%;
    }
    @media(max-width: 420px){
        top: 86%;
        left: 80%;
    }
    
`
export const Icon = styled.img`
    width: 125px;
    @media(max-width: 1024px){
        width: 100px;
    }
    @media(max-width: 1024px){
        width: 80px;
    }
    @media(max-width: 664px){
        width: 60px;
    }
    @media(max-width: 448px){
        width: 50px;
    }

`
export const BlockSliderImgMan = styled.img`
    width: 375px;
    height: 580px;
    @media(max-width: 1024px){
        width: 255px;
        height: 414px;
    }
    @media(max-width: 920px){
        width: 175px;
        height: 280px;
    }
    @media(max-width: 920px){
        width: 155px;
        height: 240px;
    }
    @media(max-width: 602px){
        width: 115px;
        height: 200px;
    }
    @media(max-width: 505px){
        width: 85px;
        height: 160px;
    }
    
`
export const BlockItem = styled.div`
    padding-bottom: 130px;
    position: relative;
    @media(max-width: 1024px){
        padding-bottom: 80px;
    }
    @media(max-width: 640px){
        padding-bottom: 40px;
    }
`
export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: 'Press Start 2P';
    text-shadow: 0px -5px 0px #A2275C;
    margin-bottom: 20px;
    @media(max-width: 627px){
        font-size: 25px;
        text-shadow: 0px -4px 0px #A2275C;
    }
`
export const Text = styled.div`
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    @media(max-width: 1206px){
        font-size: 20px;
    }
    @media(max-width: 1206px){
        font-size: 18px;
    }
    @media(max-width: 627px){
        font-size: 16px;
    }
    @media(max-width: 526px){
        font-size: 14px;
    }
    @media(max-width: 382px){
        font-size: 13px;
    }
`
export const BlockWrapperDescr = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 20px;

`
export const IconArrowBlockTwo = styled.div`
    position: absolute;
    top: 64%;
    left: 7%;
    @media(max-width: 1024px){
        width: 80px;
        margin: 10px;
        top: 64%;
        left: 7%;
    }
    @media(max-width: 760px){
        width: 80px;
        margin: 10px;
        top: 70%;
        left: 7%;
    }
    @media(max-width: 640px){
        width: 80px;
        margin: 10px;
        top: 77%;
        left: 7%;
    }
    @media(max-width: 640px){
        width: 80px;
        margin: 10px;
        top: 81%;
        left: 7%;
    }
`
export const IconTwo = styled.img`
        width: 125px;
    @media(max-width: 1024px){
        width: 100px;
    }
    @media(max-width: 1024px){
        width: 80px;
    }
    @media(max-width: 664px){
        width: 60px;
    }
    @media(max-width: 448px){
        width: 50px;
    }
`
export const BlockWrapperTwo = styled.div`
    border: solid;
    background-color: #1B0705;
    border-image-source: url(${Border});
    border-image-slice: 85%;
    border-image-width: 90%;
    padding: 50px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 3%;
    @media(max-width: 1362px){
        margin: 0 20px 0 20px;
    }
    @media(max-width: 600px){
        border-image-slice: 93%;
        border-image-width: 90%;
    }
    @media(max-width: 464px){
        height: 415px;
        border-image-slice: 92%;
        border-image-width: 90%;
        flex-direction: column;
        padding: 0px;
        justify-content: center;
        border-image-slice: 71%;
    }  

`
export const BlockIconTwo = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 464px){
        flex-direction: row;
    } 
`
export const BlockIconImgTwo = styled.img`
    width: 100px;
    margin: 20px;
    @media(max-width: 1024px){
        width: 80px;
        margin: 10px;
    }
    @media(max-width: 690px){
     width: 60px;
    }
`
export const BlockWrapperThree = styled.div`
    border: solid;
    border-image-source: url(${Border});
    border-image-slice: 75%;
    border-image-width: 90%;
    background-color: #1B0705;
    padding: 50px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 3%;
    @media(max-width: 1362px){
        align-items: center;
    }
    @media(max-width: 600px){
        margin: 0 20px 0 20px;
    }
    @media(max-width: 598px){
        flex-direction: column;
    }
    @media(max-width: 598px){
        height: 449px;
        border-image-slice: 90%;
        border-image-width: 90%;
        padding-top: 30px;
    }
    @media(max-width: 524px){
        height: 549px;
        border-image-slice: 90%;
        border-image-width: 90%;
    }
`
export const BlockIconThree = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 1625px){
    border: solid;
    width: 430px;
    height: 349px;
    border-image-source: url(${Border});
    border-image-slice: 75%;
    border-image-width: 90%; 
    margin-top: -43px;
    }
`
export const IconThree = styled.img`
    width: 350px;   

    @media(max-width: 908px){
        width: 220px; 
    }
    @media(max-width: 908px){
        width: 180px; 
    }
`
export const TextThree = styled.div`
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 130%;
    color: #FFFFFF;
    @media(min-width: 1625px){
        margin-right: 51px;
        width: 824px;
    }
    @media(max-width: 908px){
        font-size: 15px;
    }
`

export const SubTitleThree = styled.div`
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
    
    font-family: 'Press Start 2P';
    text-shadow: 0px -5px 0px #A2275C;
    margin-bottom: 20px;
    @media(max-width: 1060px){
        font-size: 23px;
    }
    @media(max-width: 908px){
        font-size: 19px;
    }
    @media(max-width: 908px){
        font-size: 17px;
    }
`
export const BtnBlock = styled.div`
display: flex;
align-items: center;    
justify-content: center;
text-align: center;
padding-bottom: 40px;
`
