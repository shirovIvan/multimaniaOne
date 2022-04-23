import React from 'react'
import Btn from '../../components/button/Button';
import { Container, FooterLogo ,BtnWrapper ,FooterMenuItem, FooterMenuItems, SubMenuItem, SubMenuItems, Wrapper,SubMenuWrapper, FooterIcon, FooterLogoImg  } from './Footer.elements';
import Sea from '../../image/icon/sea.png'
import Discord from '../../image/icon/discord.png'
import Twitter from '../../image/icon/twitter.png'
import Logo from '../../image/icon/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterMenuItems data-aos="fade-up">
        <Link activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}><FooterMenuItem>About</FooterMenuItem></Link>
          <FooterMenuItem>
          <Link activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}> Roadmap</Link></FooterMenuItem>
          <a href='/mint'><FooterMenuItem>Mint</FooterMenuItem></a>
          <FooterMenuItem>
          <Link activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
            Claim free NFT</Link></FooterMenuItem>
            <a target="_black" href="https://twitter.com/multimanianft"> <FooterMenuItem>Read Whitepaper</FooterMenuItem></a>
        </FooterMenuItems>
        <SubMenuWrapper data-aos="fade-up">
        <SubMenuItems>
          <SubMenuItem>Terms and Conditions</SubMenuItem>
          <SubMenuItem>Terms of Service (P&K)</SubMenuItem>
        </SubMenuItems>
        </SubMenuWrapper>
        <FooterIcon data-aos="fade-up">
        <a target="_black" href="https://opensea.io"><Btn theme='icon'><img style={{width : '22px'}} src={Sea}/></Btn></a>
        <a target="_black" href="https://twitter.com/multimanianft"><Btn theme='icon'><img style={{width : '22px'}} src={Twitter}/></Btn></a>
        <a target="_black" href="https://discord.gg/multimania"><Btn theme='icon'><img style={{width : '22px'}} src={Discord}/></Btn></a>
        </FooterIcon>
        <FooterLogo data-aos="fade-up">
        <FooterLogoImg src={Logo}/>
        </FooterLogo>
      </Wrapper>
    </Container>
  )
}

export default Footer