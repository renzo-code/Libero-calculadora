import React from 'react'
import { ArrayPointsTable } from '../../const'
import styled from 'styled-components'
import LineEstadistics from './LineEstadistics'

const TableCalcPositions = ({ table, referencia }) => {

  const ListarEqipos = () => {

      const newArray = table.sort((a, b) => {
        if ((a.PTS > b.PTS && a.DG < b.DG) || a.PTS > b.PTS) {
          return -1;
        }
        if ((a.PTS < b.PTS && a.DG > b.DG) || a.PTS < b.PTS) {
          return 1;
        }
        return 0;
      })

      return newArray.map((item, i) => {
          if (i < 4) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'#D2EB93'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  GF={item.GF}
                  GC={item.GC}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
          if (i === 4) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'#C2C2C2'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  GF={item.GF}
                  GC={item.GC}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
          if (i > 4) {
            return (
              <BarPoints>
                <LineEstadistics
                  colorLine={'white'}
                  key={i}
                  ImagePais={item.logo}
                  NamePais={item.pais}
                  PJ={item.PJ}
                  PG={item.PG}
                  PE={item.PE}
                  PP={item.PP}
                  GF={item.GF}
                  GC={item.GC}
                  DG={item.DG}
                  PTS={item.PTS}
                />
              </BarPoints>
            )
          }
        })
  }

  return (
    <>
      <div ref={referencia} className='contentScroll'>
        <ContainerTable>
          <WrapperHead>
            <NumberPosition>
              #
            </NumberPosition>
            <BlockPaises>
              POSICIONES DE EQUIPOS
            </BlockPaises>
            <EstadisticsHead>PJ</EstadisticsHead>
            <EstadisticsHead>PG</EstadisticsHead>
            <EstadisticsHead>PE</EstadisticsHead>
            <EstadisticsHead>PP</EstadisticsHead>
            <EstadisticsHead>GF</EstadisticsHead>
            <EstadisticsHead>GC</EstadisticsHead>
            <EstadisticsHead>PTS</EstadisticsHead>
            <EstadisticsHead>DG</EstadisticsHead>
          </WrapperHead>

          <WrapperBody>
            <WrapperPositions>
              <PositionC>1</PositionC>
              <PositionC>2</PositionC>
              <PositionC>3</PositionC>
              <PositionC>4</PositionC>
              <PositionR>5</PositionR>
              <Position>6</Position>
              <Position>7</Position>
              <Position>8</Position>
              <Position>9</Position>
              <Position>10</Position>
            </WrapperPositions>

            <WrapperBarPoints>
              {
                ListarEqipos()
              }
            </WrapperBarPoints>
          </WrapperBody>
        </ContainerTable>
      </div>
      <style jsx={true}>{`
        .contentScroll {
          height: auto;
          width: 750px;
          max-width: 100%;
          margin: 10px auto;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        .contentScroll::-webkit-scrollbar {
          height: 7px;
          background: #EEEEEE;
        }
        .contentScroll::-webkit-scrollbar-thumb {
          background: #3466D6;
          border-radius: 2px;
        }
      `}</style>
    </>
  )
}

export default TableCalcPositions
const ContentScroll = styled.div`
  height: auto;
  width: 750px;
  max-width: 100%;
  margin: 10px auto;
  overflow-x: scroll;
  overflow-y: hidden;
`
const ContainerTable = styled.div`
  height: auto;
  width: 660px;
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
  font-weight: bold;
`
const BlockPaises = styled.div`
  width: 210px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
`
const EstadisticsHead = styled.div`
  width: 50px;
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
const PositionC = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-color: #D2EB93;
  border-bottom: 1px solid #EEEEEE;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const PositionR = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-color: #C2C2C2;
  border-bottom: 1px solid #EEEEEE;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const Position = styled.div`
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #EEEEEE;
  @media (max-width: 470px){
    height: 51px;
    line-height: 50px;
  }
`
const WrapperBarPoints = styled.div`
  width: 100%;
  height: auto;
  `
const BarPoints = styled.div`
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  width: auto;
  height: 60px;
  @media (max-width: 470px){
    height: auto;
  }
`