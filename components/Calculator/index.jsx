import React, { useState, useRef } from 'react'

import styled from 'styled-components'
import MeasurerCalc from '../Measurer-calc'
import TableCalcPositions from '../Table-calc/table'
import MesurerCalcLine from '../MesurerCalcLine'
// import { ArrayPointsTable } from '../../const/index'
import exportAsImage from '../../src/utils/exportAsImage'
import TableScorers from '../TableScorers'

const Calculator = () => {

  const ArrayPointsTable = [
    {
      pais: 'Brasil',
      logo: './static/images/100_brasil.svg',
      PJ: 15,
      PG: 12,
      PE: 3,
      PP: 0,
      DG: 27,
      PTS: 39,
      GF: 32,
      GC: 5
    },
    {
      pais: 'Argentina',
      logo: './static/images/100_argentina.svg',
      PJ: 15,
      PG: 10,
      PE: 5,
      PP: 0,
      DG: 16,
      PTS: 35,
      GF: 23,
      GC: 7
    },
    {
      pais: 'Ecuador',
      logo: './static/images/100_ecuador.svg',
      PJ: 16,
      PG: 7,
      PE: 4,
      PP: 5,
      DG: 10,
      PTS: 25,
      GF: 25,
      GC: 15
    },
    {
      pais: 'Uruguay',
      logo: './static/images/100_uruguay.svg',
      PJ: 16,
      PG: 6,
      PE: 4,
      PP: 6,
      DG: -3,
      PTS: 22,
      GF: 19,
      GC: 22
    },
    {
      pais: 'Perú',
      logo: './static/images/100_peru.svg',
      PJ: 16,
      PG: 6,
      PE: 3,
      PP: 7,
      DG: -4,
      PTS: 21,
      GF: 17,
      GC: 21
    },
    {
      pais: 'Chile',
      logo: './static/images/100_chile.svg',
      PJ: 16,
      PG: 5,
      PE: 4,
      PP: 7,
      DG: -1,
      PTS: 19,
      GF: 19,
      GC: 20
    },
    {
      pais: 'Colombia',
      logo: './static/images/100_colombia.svg',
      PJ: 16,
      PG: 3,
      PE: 8,
      PP: 5,
      DG: -3,
      PTS: 17,
      GF: 16,
      GC: 19
    },
    {
      pais: 'Bolivia',
      logo: './static/images/100_bolivia.svg',
      PJ: 16,
      PG: 4,
      PE: 3,
      PP: 9,
      DG: -12,
      PTS: 15,
      GF: 23,
      GC: 35
    },
    {
      pais: 'Paraguay',
      logo: './static/images/100_paraguay.svg',
      PJ: 16,
      PG: 2,
      PE: 7,
      PP: 7,
      DG: -14,
      PTS: 13,
      GF: 9,
      GC: 23
    },
    {
      pais: 'Venezuela',
      logo: './static/images/100_venezuela.svg',
      PJ: 16,
      PG: 3,
      PE: 1,
      PP: 12,
      DG: -16,
      PTS: 10,
      GF: 14,
      GC: 30
    }
  ]
  const [table, setTable] = useState(ArrayPointsTable)
  const exportRef = useRef();
  return (
    <Container>
      <Title>Calculadora de las Eliminatorias Sudamericanas a Qatar 2022</Title>
      <Bajada>
        Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se disputará en Qatar el 2022.
      </Bajada>
      {/* <MeasurerCalc table={table} setTable={setTable} /> */}
      <MesurerCalcLine originTable={ArrayPointsTable} table={table} setTable={setTable} />
      <div className='main-container'>
        <TableCalcPositions referencia={exportRef} table={table} />
        <div className='descarga-goleadores-container'>
          <div className='descarga-container'>
            <Bajada>Descarga tu predicción Eliminatorias Sudamérica Qatar 2022</Bajada>
            <BtnDowload onClick={() => exportAsImage(exportRef.current, "Predicción")}>Descargar</BtnDowload>
          </div>
          <div>
            <TableScorers />
          </div>
        </div>
      </div>
      <style jsx={true}>{`
        .main-container {
          display: flex
        }

        .descarga-goleadores-container {
          display: flex;
          padding-bottom: 62px;
          flex-flow: column-reverse;
        }

        .descarga-container {
          margin-top: 30px;
        }

        @media (max-width: 1100px){
          .main-container {
            display: block
          }
          .descarga-goleadores-container {
            flex-flow: column;
            padding-bottom: 0;
          }
          .descarga-container {
            margin-top: 0;
          }
        }
        
      `}</style>
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  height: auto;
  width: 100%;
`

const Title = styled.h1`
  font-size: 35px;
  margin: 10px auto;
  width: 90%;
  line-height: 40px;
  height: auto;
  letter-spacing: 0.3px;
  text-align: center;
`
const Bajada = styled.h2`
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
  line-height: 25px;
`
const BtnDowload = styled.div`
  width: 120px;
  height: 35px;
  line-height: 35px;
  font-weight: 500;
  border-radius: 3px;
  margin: 0 auto;
  text-align: center;
  background-color: #3466D6;
  color: white;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
    transition: 0.4s;
  }
`