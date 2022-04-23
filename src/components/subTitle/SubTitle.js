import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Text } from './SubTitle.elements'

const SubTitle = (props) => {
  return (
    <Container>
        <Wrapper>
            <Text>{props.children}</Text>
        </Wrapper>
    </Container>    
  )
}

export default SubTitle