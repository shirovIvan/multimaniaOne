import React from 'react'
import Btn from '../button/Button'
import { Container, MenuItemContainer ,LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, Social, MobileIcon, BtnWrapper } from './Navbar.elements'
import Sea from '../../image/icon/sea.png'
import Discord from '../../image/icon/discord.png'
import Twitter from '../../image/icon/twitter.png'
import Logo from '../../image/icon/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";



const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Container>
        <Wrapper>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <Menu open={showMobileMenu}>
            <LogoContainer data-aos="fade-down">
                <img src={Logo}/>
            </LogoContainer>

                <MenuItem data-aos="fade-down">
                        <MenuItemLink>
                        <Link activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}> About</Link>
                        </MenuItemLink>
                </MenuItem>
                <MenuItem data-aos="fade-down">
                    <MenuItemLink>
                    <Link activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}> 
                        Roadmap
                        </Link>
                    </MenuItemLink>
                </MenuItem>
                <Social>
                <MenuItem data-aos="fade-down">
                    <MenuItemLink>
                        <a target="_black" href="https://opensea.io"><Btn theme='icon'><img style={{width : '22px'}} src={Sea}/></Btn></a>
                        <a target="_black" href="https://twitter.com/multimanianft"><Btn theme='icon'><img style={{width : '22px'}} src={Twitter}/></Btn></a>
                        <a target="_black" href="https://discord.gg/multimania"><Btn theme='icon'><img style={{width : '22px'}} src={Discord}/></Btn></a>
                    </MenuItemLink>
                </MenuItem>
                </Social>
                <MenuItem data-aos="fade-down">
                <MenuItemLink>
                        <Btn theme='pink'>Connect Wallet</Btn>
                </MenuItemLink>
                </MenuItem>

            </Menu>
        </Wrapper>
    </Container>
  )
}

export default Navbar
