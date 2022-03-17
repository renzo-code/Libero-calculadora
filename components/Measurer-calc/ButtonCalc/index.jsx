import React from 'react'
import styled from 'styled-components'

const ButtonCalc = ({ onClick, disabled, colorBtn, msjError, txt }) => {
  return (
    <WrapperBtn>
      <ButtonCalculator colorBtn={colorBtn} onClick={onClick} disabled={disabled}>
        {txt}
      </ButtonCalculator>
      {msjError && <TextError>{msjError}</TextError>}
    </WrapperBtn>
  )
}

export default ButtonCalc

const WrapperBtn = styled.div`
  height: auto;
  width: 130px;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 100px;
    margin: 0 5px;
  }
`
const ButtonCalculator = styled.button`
  height: 28px;
  width: inherit;
  cursor: pointer;
  background-color: ${({colorBtn}) => colorBtn};
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 28px;
  margin: 10px auto;
  outline: none;
  border: none;
  &:hover{
    transition: 0.4s;
    opacity: 0.9;
  }
`
const TextError = styled.h3`
  font-size: 11px;
  color: red;
  font-weight: 600;
  text-align: center;
`