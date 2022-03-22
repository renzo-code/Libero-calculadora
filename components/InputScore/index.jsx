import React from 'react'

import styled from 'styled-components'

const InputScore = ({ onchange, value, name, idJornadaSelect, idJornadaActual, type = 'text', ...props }) => {
  const Input = styled.input`
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  margin: 0 10px;

  font-size: 32px;
  font-weight: 900;
  letter-spacing: 8px;
  text-align: center;

  
  border: ${idJornadaSelect >= idJornadaActual ? 'solid 1px #000;' : '0 !important;'}
  @media (max-width: 400px){
    margin: 0 5px;
  }
`
  return (
    <>
      <Input
        value={value}
        name={name}
        type={type}
        {...props}
      />
    </>
  )
}

export default InputScore


// 