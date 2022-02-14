import React from 'react'

import NextHead from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'

const Layout = (props) => {
  const {
    children
  } = props

  return (
    <>
      <NextHead>
        {/* Metadatos SEO */}
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/libero_32x32.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="/static/images/libero_192x192.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/libero_16x16.png"></link>

        {/* Metadatos Facebook */}
        <meta property="fb:pages" content="145820412845"></meta>
        <meta property="fb:app_id" content="602624269799095"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022"></meta>
        <meta property="og:title" content="Líbero Especiales - Calculadora de las Eliminatorias"></meta>
        <meta property="og:description" content="Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se disputará en Qatar el 2022."></meta>

        <meta property="og:image" content="/static/images/libero_meta-image.png"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="660"></meta>

        {/* Metadatps Twitter */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@diario_libero"></meta>
        <meta name="twitter:title" content="Diario LÍBERO | Calculadora de las Eliminatorias QATAR 2022"></meta>
        <meta name="twitter:description" content="Usa nuestra calculadora, pronostica resultados y mira si tu selección alcanzará un cupo para el Mundial que se disputará en Qatar el 2022."></meta>
        <meta property="twitter:image" content="/static/images/libero_meta-image.png"></meta>

        <title>Libero Especiales - Calculadora de las Eliminatorias</title>
        <link rel="icon" type="image/png" sizes="32x32" href="https://libero.pe/static/images/libero_32x32.png"></link>
        <link rel="canonical" href="https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022"></link>
      </NextHead>
      <Wrapper>
        <LayoutContent>
          <Header/>
          <LayoutBody>
            { children }
          </LayoutBody>
        </LayoutContent>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`
const LayoutContent = styled.div`
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`
const LayoutBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
`