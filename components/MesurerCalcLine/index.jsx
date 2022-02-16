import React from 'react'

import BlockVs from './BlockVs'
import styled from 'styled-components'

const MesurerCalcLine = () => {
  return (
    <ContainerMesurer>
      <BlockVs/>
      <BlockVs/>
      <BlockVs/>
      <BlockVs/>
      <BlockVs/>
    </ContainerMesurer>
  )
}

export default MesurerCalcLine

const ContainerMesurer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 1300px;
  margin: 0 auto;
  background-color: #EEEEEE;
`