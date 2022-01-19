import React from 'react'

import Layout from '../layout/default.jsx'
import Calculator from '../components/Calculator'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Home = () => {
  return(
    <>
      <Layout>
        <Title>Calculadora de las Eliminatorias Sudamericanas a Qatar 2022</Title>
        <Bajada>
          Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se disputará en Qatar el 2022.
        </Bajada>
        <Calculator/>
      </Layout>
      <Footer/>
    </>
  )
}

export default Home

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
  margin: 0 0 15px 0;
  width: 90%;
  margin: 0 auto;
`