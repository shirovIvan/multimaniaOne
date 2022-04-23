import React, { useState } from 'react'
import {BackgroundImg, BtnBlock ,SubTitleThree , TextThree ,IconThree, BlockIconThree, BlockWrapperThree ,BlockWrapperTwo , BlockIconImgTwo , BlockIconTwo ,IconTwo ,IconArrowBlockTwo ,BlockWrapperDescr ,Text ,SubTitle ,BlockItem ,BlockSliderImgWoman , BlockSliderImgMan ,IconArrowBlock ,Icon, BlockSlider ,BlockText ,BlockSliderImg ,BlockIcon ,BlockIconImg , Blocks, BlockWrapper, Container, Wrapper } from './Works.elements'
import Title from '../../components/title/Title'
import FirstHero from '../../image/works/Firsthero.png'
import SecondHero from '../../image/works/Sechero.png'
import IconArrow from '../../image/works/ArrowDown.png'
import BigHero from '../../image/works/BigHero.png'
import Woman from '../../image/works/Woman.png'
import SwordIcon from '../../image/works/SwordIcon.png'
import StickIcon from '../../image/works/StickIcon.png'
import War from '../../image/works/NoWarIcon.gif'
import Btn from '../../components/button/ButtonFree'

const Works = () => {
  const [char, setChar] = useState(true);
  return (
    <Container id="section3">
      <BackgroundImg>
      <Wrapper>
        <Title>How it works?</Title>
        <Blocks>

          <BlockItem data-aos="zoom-in">
          <BlockWrapper>
              <BlockIcon>
                  <BlockIconImg src={FirstHero} onClick={() => setChar(false)}/>
                  <BlockIconImg src={SecondHero} onClick={() => setChar(true)}/>
              </BlockIcon>
              <BlockSlider>
                <BlockSliderImgMan src={char ? BigHero : Woman}/>
              </BlockSlider>
              <BlockText>
              Your character look depends on his metadata. The game is completely free-to-play and don't needs you to mint NFT to play it. Each character has its own stats, weapon and unique features and animations detached from NFT. 
              </BlockText>
              <IconArrowBlock>
                <Icon src={IconArrow}/>
              </IconArrowBlock>
          </BlockWrapper>
          </BlockItem>

          <BlockItem data-aos="zoom-in">
            <BlockWrapperTwo>
              <BlockWrapperDescr>
              <SubTitle>
                Weapon 
              </SubTitle>
              <Text>
              Each character has a unique weapon. Weapon skins can be received in many different ways, such as NFT weapons based on ERC-1155 standard, so the number of weapons will be based on a skin rarity. For example: the left picture is the default weapon skin for bo (Ling Ling’s staff) and will be unlocked for everybody in the game; next picture is a NFT weapon “Sword of Wisdom” (Yang’s sword) and it will have an amount of 500 holders, who will use it in game or rent it out to receive some tokens from another players.
              </Text>
              </BlockWrapperDescr>
              <BlockIconTwo>
                  <BlockIconImgTwo src={SwordIcon} />
                  <BlockIconImgTwo src={StickIcon}/>
            </BlockIconTwo>
            </BlockWrapperTwo>
            <IconArrowBlockTwo>
                <IconTwo src={IconArrow}/>
            </IconArrowBlockTwo>
          </BlockItem>

          <BlockItem data-aos="zoom-in">
            <BlockWrapperThree>
              <BlockWrapperDescr>
              <SubTitleThree>
              Claim free NFT emblem  
              </SubTitleThree>
              <TextThree>
              Emblems and emotions can be used as taunts on opponent and good collectibles.<br/>
              <br/>
              This “NO WAR” emblem is our present to community. Based on the ERC-1155 standard, anyone can claim this NFT emblem absolutely for free. Our team is against war and we’re happy to announce that 10% of all sales fees will go to charity in Ukrainian schools and orphanages.             
              </TextThree>
              </BlockWrapperDescr>
              <BlockIconThree>
                <IconThree src={War}/>
            </BlockIconThree>
            </BlockWrapperThree>
          </BlockItem>
        </Blocks>
        <BtnBlock>
        <Btn>Claim free NFT "NO WAR" emblem</Btn>
        </BtnBlock>

      </Wrapper>
      </BackgroundImg>
    </Container>
  )
}

export default Works