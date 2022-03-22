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
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/libero.svg"></link>
        <meta name="description" content="Disfruta del simulador eliminatorias Qatar 2022 que todo aficionado necesita, saca tus cálculos y genera tus pronósticos AQUÍ." />
        <meta name="author" content="Alejandro Mayurí, Renzo Neira" />
        <meta name="keywords" content="clasificatorias, eliminatorias, perú, mundial, qatar, calculadora, futbol" />

        {/* Metadatos Facebook */}
        <meta property="fb:pages" content="145820412845"></meta>
        <meta property="fb:app_id" content="602624269799095"></meta>
        <meta property="og:title" content="Calculadora Eliminatorias Qatar 2022 | Libero.pe" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022/" />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2022/03/21/lg_6238e4583b471c032f17b4a0.jpg" />
        <meta property="og:site_name" content="Libero" />
        <meta property="og:description" content="Disfruta del simulador eliminatorias Qatar 2022 que todo aficionado necesita, saca tus cálculos y genera tus pronósticos AQUÍ."></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="660"></meta>

        {/* Metadatps Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:url" content="https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022/" />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2022/03/21/lg_6238e4583b471c032f17b4a0.jpg" />
        <meta name="twitter:title" content="Calculadora Eliminatorias Qatar 2022 | Libero.pe" />
        <meta name="twitter:description" content="Disfruta del simulador eliminatorias Qatar 2022 que todo aficionado necesita, saca tus cálculos y genera tus pronósticos AQUÍ." />
        <meta name="twitter:width" content="150" />
        <meta name="twitter:height" content="120" />

        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <title>Libero Especiales - Calculadora de las Eliminatorias</title>
        <link rel="icon" type="image/png" sizes="32x32" href="https://libero.pe/static/images/libero_32x32.png"></link>
        <link rel="canonical" href="https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022"></link>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                "name": "¿Cuántos equipos clasifican al Mundial Qatar 2022?",
                "acceptedAnswer": {
                  "@type": "Answer",
                "text": "Tal como se dio en las últimas Copas del Mundo de la FIFA, Qatar 2022 contará con la participación de 32 selecciones de diferentes países de América, África, Asia Europa y Oceanía, en caso el equipo de este último continente supere el repechaje."
                }
                },{
                  "@type": "Question",
                "name": "¿Cuántos equipos de Sudamérica clasifican al Mundial Qatar 2022?",
                "acceptedAnswer": {
                  "@type": "Answer",
                "text": "Sudamérica cuenta con 4 cupos fijos para el Mundial Qatar 2022 y un medio boleto para el repechaje de esta cita deportiva, por lo que podrían clasificar hasta 5 naciones diferentes."
                }
              },{
                  "@type": "Question",
                "name": "¿Cuándo es el mundial de Qatar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                "text": "La Copa del Mundo Qatar 2022 se jugará entre el 21 de noviembre y 18 de diciembre. Por cuestiones climáticas en el país organizador, esta edición del Mundial será la primera en no disputarse a mediados de año."
                }
              }]
            `
        }}>
        </script>
      </NextHead>
      <Wrapper>
        <LayoutContent>
          <Header />
          <LayoutBody>
            {children}
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