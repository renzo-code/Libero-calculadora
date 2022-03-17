import React from 'react'

import Layout from '../layout/default.jsx'
import Calculator from '../components/Calculator'
import styled from 'styled-components'
import Footer from '../components/Footer'
import TableScorers from '../components/TableScorers/index.jsx'
import Social from '../components/Social/index.jsx'

const Home = () => {
  return(
    <>
      <Layout>
        <Social/>
        <Calculator/>
        <TableScorers/>
      </Layout>
      <Footer/>
    </>
  )
}

export default Home
