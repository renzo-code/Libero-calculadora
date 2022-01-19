import React from 'react'

import styled from 'styled-components'

const Header = () => {
  return (
    <ContainerHeader>
      <a target="_blank" href='https://libero.pe' rel='noreferrer'>
        <WrapperImage>
          <Image src='https://libero.pe/static/images/logo-libero.svg' alt="logo-libero"/>
        </WrapperImage>
      </a>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 104px;
  max-width: 1300px;
  width: auto;
  background-color: #3466D6;
  margin: 0 auto;
`
const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 400px;
  margin: 0px auto;
  @media (max-width: 530px){
    width: 280px;
    height: 80%;
    padding-top: 18px;
  }
  @media (max-width: 440px){
    height: 90%;
  }
`
const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  margin: 0 auto;
`