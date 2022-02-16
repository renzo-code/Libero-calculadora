import React, { useState } from 'react'

import styled from 'styled-components'
import MeasurerCalc from '../Measurer-calc'
import TableCalcPositions from '../Table-calc/table'
import MesurerCalcLine from '../MesurerCalcLine'
import { ArrayPointsTable } from '../../const/index'

const Calculator = () => {
  const [table, setTable] = useState(ArrayPointsTable)
  return (
    <Container>
      <Title>Calculadora de las Eliminatorias Sudamericanas a Qatar 2022</Title>
      <Bajada>
        Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se disputará en Qatar el 2022.
      </Bajada>
      <MeasurerCalc table={table} setTable={setTable} />
      <MesurerCalcLine/>
      <TableCalcPositions table={table} setTable={setTable} />
      <Bajada>Descarga tu predicción Eliminatorias Sudamérica Qatar 2022</Bajada>
      <BtnDowload>Descargar</BtnDowload>
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