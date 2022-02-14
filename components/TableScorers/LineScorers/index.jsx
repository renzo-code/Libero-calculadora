import React from 'react'
import styled from 'styled-components'


const LineScorers = ({ logoPais, player, goals }) => {
  return (
    <>
      <WrapperImgtitle>
        <ContentImage>
          <ImgPais src={logoPais}/>
        </ContentImage>
        <ContentTitlePais>{player}</ContentTitlePais>

        <WrapperEstadistics>
          <Estadistics>{goals}</Estadistics>
        </WrapperEstadistics>
      </WrapperImgtitle>
    </>
  )
}

export default LineScorers

const WrapperImgtitle = styled.div`
  display: flex;
  width: auto;
  height: auto;
  border-bottom: solid 1px #EEEEEE;
`
const ContentImage = styled.div`
  height: 59px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 470px){
    height: 50px;
  }
`
const ImgPais = styled.img`
  height: 75%;
  object-fit: cover;
  border-radius: 55px;
`
const ContentTitlePais = styled.div`
  padding-left: 15px;
  width: 190px;
  height: 59px;
  line-height: 60px;
  text-align: left;
`
const WrapperEstadistics = styled.div`
  display: flex;
  height: 60px;
`
const Estadistics = styled.div`
  width: 60px;
  height: 59px;
  /* border-bottom: 1px solid white; */
  font-size: 15px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
`