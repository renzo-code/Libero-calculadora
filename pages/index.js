import React from 'react'

import Layout from '../layout/default.jsx'
import Calculator from '../components/Calculator'
import styled from 'styled-components'
import Footer from '../components/Footer'
import TableScorers from '../components/TableScorers/index.jsx'

const Home = () => {
  return(
    <>
      <Layout>
        <Calculator/>
        <TableScorers/>
      </Layout>
      <Footer/>
    </>
  )
}

export default Home
