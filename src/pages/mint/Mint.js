import React, {useState} from 'react'
import {SaleStatus, BackgroundImg, BtnWrapper, CounterInc ,CounterDec ,Counter, BlockCounter, Total ,SubTitle ,BlockNft, NftBlock, NftImg, Wrapper ,Container, BlockWrapper} from './Mint.elements'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../blocks/footer/Footer';
import DiscordNft from '../../image/1.gif'
import Title from '../../components/title/Title'
import Btn from '../../components/button/Button'


const Mint = () => {
  const [counter, setCounter] = useState(1)
  return (
    
    <Container>
      <BackgroundImg>
      <Wrapper>
        <Navbar/>
          <BlockWrapper>
            <NftBlock>
              <NftImg src={DiscordNft}/>
            </NftBlock>
            <BlockNft>
              <Title>Sale status</Title>
              <SaleStatus data-aos="zoom-in">Whitelist only</SaleStatus>
              <SubTitle data-aos="zoom-in" >Supply: 3000/1000</SubTitle>
              <Total data-aos="zoom-in">Total Price</Total>
              <BlockCounter data-aos="zoom-in">
                <CounterDec onClick={() => setCounter(counter - 1)}>-</CounterDec>
                <Counter>{counter}</Counter>
                <CounterInc onClick={() => setCounter(counter + 1)}>+</CounterInc>
              </BlockCounter>
              <BtnWrapper data-aos="zoom-in">
                <Btn data-aos="zoom-in" theme='pink'>Mint</Btn>
              </BtnWrapper>
            </BlockNft>
          </BlockWrapper>
       </Wrapper>
       <Footer/>
       </BackgroundImg>
    </Container>
  )
}

export default Mint