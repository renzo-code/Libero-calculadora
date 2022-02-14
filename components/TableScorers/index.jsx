import React from 'react'

import styled from 'styled-components'
import LineScorers from './LineScorers'
import { ArrayScorers } from '../../const'

const TableScorers = () => {
  return (
    <>
      {/* <Container> */}
        <div className='ContentScroll'>
          <ContainerTable>
            <WrapperHead>
              <NumberPosition>#</NumberPosition>
              <BlockPaises>GOLEADORES</BlockPaises>
              <EstadisticsHead>GOLES</EstadisticsHead>
            </WrapperHead>

            <WrapperBody>
              <WrapperPositions>
                <Position>1</Position>
                <Position>2</Position>
                <Position>3</Position>
                <Position>4</Position>
                <Position>5</Position>
                <Position>6</Position>
                <Position>7</Position>
              </WrapperPositions>

              <WrapperBarPoints>
                <BarPoints>
                {
                  ArrayScorers.map((item, i) => {
                    return (
                      <>
                        <LineScorers
                          key={i}
                          logoPais={item?.logo}
                          player={item?.player}
                          goals={item?.goals}
                        />
                      </>
                    )
                  })
                }
                  </BarPoints>
              </WrapperBarPoints>
            </WrapperBody>
          </ContainerTable>
        </div>
      {/* </Container> */}
      <style jsx={true}>{`
        .ContentScroll {
          display: flex;
          height: auto;
          margin: 0 auto;
          width: 360px;
          max-width: 100%;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        .ContentScroll::-webkit-scrollbar {
          height: 7px;
          background: #EEEEEE;
        }
        .ContentScroll::-webkit-scrollbar-thumb {
          background: #3466D6;
          border-radius: 2px;
        }
      `}</style>
    </>
  )
}

export default TableScorers

const Container = styled.div`
  margin: 0 auto;
  height: auto;
  width: 360px;
`

const ContentScroll = styled.div`
  height: auto;
  width: auto;
  max-width: 100%;
  margin: 10px auto;
  overflow-x: scroll;
  overflow-y: hidden;
`
const ContainerTable = styled.div`
  height: auto;
  width: auto;
  margin: 10px auto;
  background-color: white;
`
const WrapperHead = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #F2F2F2;
  border-bottom: solid 2px #E4E4E4;
`
const NumberPosition = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: 900;
  font-size: 17px;
`
const BlockPaises = styled.div`
  width: 248px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const EstadisticsHead = styled.div`
  width: 60px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const WrapperBody = styled.div`
  display: flex;
  width: auto;
  height: auto;
`
const WrapperPositions = styled.div`
  width: 50px;
  height: auto;
`
const Position = styled.div`
  width: 50px;
  height: 61px;
  line-height: 61px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border-bottom: solid 1px #EEEEEE;
`
const WrapperBarPoints = styled.div`
  display: flex;
  width: 310px;
  height: auto;
  `
const BarPoints = styled.div`
  border-bottom: 1px solid white;
  width: auto;
  height: 60px;
`