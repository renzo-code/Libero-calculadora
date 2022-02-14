import React from 'react'

import styled from 'styled-components'

const LineEstadistics = ({ ImagePais, NamePais, PJ, PG, PE, PP, GF, GC, DG, PTS, colorLine }) => {
  return (
    <>
      <WrapperImgtitle colorLine={colorLine}>
        <ContentImage>
          <ImgPais src={ImagePais}/>
        </ContentImage>
        <ContentTitlePais>{NamePais}</ContentTitlePais>

        <WrapperEstadistics>
          <Estadistics>{PJ}</Estadistics>
          <Estadistics>{PG}</Estadistics>
          <Estadistics>{PE}</Estadistics>
          <Estadistics>{PP}</Estadistics>
          <Estadistics>{GF}</Estadistics>
          <Estadistics>{GC}</Estadistics>
          <Estadistics>{PTS}</Estadistics>
          <Estadistics>{DG}</Estadistics>
        </WrapperEstadistics>
      </WrapperImgtitle>
    </>
  )
}

export default LineEstadistics

const WrapperImgtitle = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background-color: ${({colorLine}) => colorLine };
  @media (max-width: 470px){
    height: 50px;
  }
`
const ContentImage = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 470px){
    height: 50px;
  }
`
const ImgPais = styled.img`
  height: 80%;
  object-fit: cover;
  border-radius: 50px;
`
const ContentTitlePais = styled.div`
  padding-left: 15px;
  width: 150px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  @media (max-width: 470px){
    height: 50px;
    line-height: 50px;
  }
`
const WrapperEstadistics = styled.div`
  display: flex;
  height: 60px;
  @media (max-width: 470px){
    height: 50px;
  }
`
const Estadistics = styled.div`
  width: 50px;
  height: 60px;
  /* border-bottom: 1px solid white; */
  font-size: 15px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
  @media (max-width: 470px){
    height: 50px;
    line-height: 50px;
  }
`