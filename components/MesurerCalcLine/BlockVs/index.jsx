import React from 'react'

import styled from 'styled-components'

const BlockVs = () => {
  return (
    <ContainerVs>
      <WrapperCountries>
        <WrapperImage>
          <ImageCountries src="./static/images/100_colombia.svg"/>
        </WrapperImage>
        <WrapperImage>
          <ImageCountries src="./static/images/100_peru.svg"/>
        </WrapperImage>
      </WrapperCountries>

      <BlockScore>
        <Text>0</Text>
        <Text>-</Text>
        <Text>0</Text>
      </BlockScore>
      <Date>Viernes 28 de Enero del 2022</Date>
      <Place>Metropolitano Roberto Meléndez</Place>
    </ContainerVs>
  )
}

export default BlockVs

const ContainerVs = styled.div`
  height: auto;
  width: 220px;
  border-right: solid 1px #CBCBCB;
`
const WrapperCountries = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75%;
  height: 70px;
  /* background-color: aqua; */
  `
const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
  `
const ImageCountries = styled.img`
  border-radius: 100px;
  height: auto;
  width: 70%;
`
const BlockScore = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: greenyellow; */
  height: 35px;
  width: 100%;
  line-height: 35px;
  text-align: center;
`
const Text = styled.h2`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 8px;
  text-align: center;
`
const Date = styled.div`
  width: 100%;
  max-height: 40px;
  height: 20px;
  /* background-color: blue; */
  text-align: center;
  line-height: 20px;
  height: auto;
  /* color: #CBCBCB; */
  letter-spacing: -0.3px;
  font-weight: 600;
  font-size: 15px;
  `
const Place = styled.div`
  height: 23px;
  width: 100%;
  font-size: 12px;
  line-height: 23px;
  color: #C2C2C2;
  text-align: center;
  font-weight: 700;
  font-style: oblique;
  /* background-color: pink; */
`