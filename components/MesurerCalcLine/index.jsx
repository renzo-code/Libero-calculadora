import React, { useState, useMemo } from 'react'
import { partidosPorFecha } from '../../const'
import BlockVs from './BlockVs'
import styled from 'styled-components'
import ButtonCalc from '../Measurer-calc/ButtonCalc'

const MesurerCalcLine = ({ table, setTable }) => {

  const ID_FECHA_ACTUAL = 3

  const [idFecha, setIdFecha] = useState(ID_FECHA_ACTUAL)
  const [ultimaFechaData, setUltimaFechaData] = useState(ID_FECHA_ACTUAL)

  const [fecha14, setFecha14] = useState(partidosPorFecha[0])
  const [fecha15, setFecha15] = useState(partidosPorFecha[1])
  const [fecha16, setFecha16] = useState(partidosPorFecha[2])
  const [fecha17, setFecha17] = useState(partidosPorFecha[3])
  const [fecha18, setFecha18] = useState(partidosPorFecha[4])

  const [errorCalculo, setErrorCalculo] = useState(false)

  const FECHA_ACTUAL = fecha16

  const handleCambiarFecha = (num) => {
    setIdFecha(idFecha + num)
    setErrorCalculo(false)
  }

  const handleClean = (data, fn) => {
    const newArray = data.partidos.map((f) => {
      return {
        ...f,
        scoreLeft: "",
        scoreRight: ""
      }
    })
    fn({ ...data, partidos: [...newArray] })
    console.log(newArray)
  }

  const handleInput = (e, fn, id, data) => {
    const { value, validity: { valid }, name } = e.target
    const newArray = data.partidos.map((f) => {
      if (f.idPartido === id) {
        const x = valid ? value : f[name]
        return {
          ...f,
          [name]: x
        }
      }
      return { ...f }
    })
    fn({ ...data, partidos: [...newArray] })
  }

  const fecha = (fecha) => {
    switch (fecha) {
      case 1: return fecha14;
      case 2: return fecha15;
      case 3: return fecha16;
      case 4: return fecha17;
      case 5: return fecha18;
      default: return FECHA_ACTUAL;
    }
  }

  const setFecha = (fecha) => {
    switch (fecha) {
      case 1: return setFecha14;
      case 2: return setFecha15;
      case 3: return setFecha16;
      case 4: return setFecha17;
      case 5: return setFecha18;
      default: return setFecha17;
    }
  }

  const getInfoCountry = (country) => {
    return table.find((t) => t.pais === country)
  }

  const validatedVs = (partido) => {
    const info1 = getInfoCountry(partido.nombrePaisLeft)
    const info2 = getInfoCountry(partido.nombrePaisRight)

    if (partido.scoreLeft > partido.scoreRight) {
      info1.PJ = info1.PJ + 1
      info2.PJ = info2.PJ + 1
      info1.PG = info1.PG + 1
      info2.PP = info2.PP + 1
      info2.DG = info2.DG - (partido.scoreLeft - partido.scoreRight)
      info1.PTS = info1.PTS + 3
      info1.DG = info1.DG + (partido.scoreLeft - partido.scoreRight)
    } else if (partido.scoreLeft < partido.scoreRight) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info1.PP = info1.PP + 1
      info2.PG = info2.PG + 1
      info2.PTS = info2.PTS + 3
      info2.DG = info2.DG - (partido.scoreRight - partido.scoreLeft)
      info1.DG = info1.DG + (partido.scoreRight - partido.scoreLeft)
    } else if (partido.scoreLeft === partido.scoreRight) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info2.PE = info2.PE + 1
      info1.PE = info1.PE + 1
      info2.PTS = info2.PTS + 1
      info1.PTS = info1.PTS + 1
    }
    setTable([...table, info1, info2])
  }

  const CalcPoints = (item) => {
    let isValid = true

    for (let i = 0; i < item.partidos.length; i++) {
      if (item.partidos[i].scoreLeft.length === 0 || item.partidos[i].scoreRight.length === 0) {
        isValid = false
      }
      if (!isValid) {
        setErrorCalculo(true);
        break;
      }
    }

    if (isValid) {
      item.partidos.forEach((partido) => {
        validatedVs(partido)
      })
      setUltimaFechaData(ultimaFechaData + 1)
    }
  }

  console.log(fecha17.partidos)

  const MostrarDataFecha = () => {
    return (
      <>
        {
          fecha(idFecha).partidos &&
          fecha(idFecha).partidos.map((partido, index) => (
            <BlockVs
              key={index}
              banderaPaisLeft={partido.banderaPaisLeft}
              banderaPaisRight={partido.banderaPaisRight}
              scoreLeft={partido.scoreLeft}
              scoreRight={partido.scoreRight}
              handleInput={(e) => handleInput(e, setFecha(idFecha), partido.idPartido, fecha(idFecha))}
              idJornadaActual={ultimaFechaData}
              idJornadaSelect={fecha(idFecha).id}
            />
          ))
        }
      </>
    )
  }

  const partidosxFecha = useMemo(() => MostrarDataFecha(), [fecha])

  return (
    <>
      <SelectedDate>{`FECHA ${fecha(idFecha).jornada}`}</SelectedDate>
      <div className='contentScroll-calc'>

        <ContainerMesurer>
          {partidosxFecha}
        </ContainerMesurer>
      </div>

      <div className='buttonMesureContainer'>
        <button className='mesureLeftButton'
          onClick={() => handleCambiarFecha(-1)}
          disabled={idFecha <= 1 ? true : false}
        >
          <svg enable-background="new 0 0 32 32" id="1" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink"><path d="M22.285,15.349L16,21.544l-6.285-6.196c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   l6.999,6.899c0.379,0.375,1.048,0.377,1.429,0l6.999-6.9c0.394-0.39,0.394-1.024,0-1.414   C23.319,14.958,22.679,14.958,22.285,15.349z" fill="#121313" /><path d="M15.286,16.662c0.379,0.375,1.048,0.377,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L16,14.544L9.715,8.349c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   L15.286,16.662z" fill="#121313" /></svg>
        </button>
        <ButtonCalc txt={'Limpiar'} disabled={idFecha > ID_FECHA_ACTUAL ? false : true} colorBtn={idFecha > ID_FECHA_ACTUAL ? 'green' : 'red'} onClick={() => { handleClean(fecha(idFecha), setFecha(idFecha)) }} />
        <ButtonCalc txt={'Calcular'} disabled={idFecha > ultimaFechaData ? false : true} colorBtn={idFecha > ultimaFechaData ? 'green' : 'red'} onClick={() => { CalcPoints(fecha(idFecha)) }} />
        <button className='mesureRightButton'
          onClick={() => handleCambiarFecha(1)}
          disabled={idFecha >= 5 ? true : false}
        >
          <svg enable-background="new 0 0 32 32" id="1" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink"><path d="M22.285,15.349L16,21.544l-6.285-6.196c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   l6.999,6.899c0.379,0.375,1.048,0.377,1.429,0l6.999-6.9c0.394-0.39,0.394-1.024,0-1.414   C23.319,14.958,22.679,14.958,22.285,15.349z" fill="#121313" /><path d="M15.286,16.662c0.379,0.375,1.048,0.377,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L16,14.544L9.715,8.349c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   L15.286,16.662z" fill="#121313" /></svg>
        </button>
      </div>

      {errorCalculo && <TextError>Complete todos los espacios.</TextError>}

      <style jsx={true}>{`
        .contentScroll-calc {
          height: auto;
          width: 1300px;
          max-width: 100%;
          margin: 10px auto;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        .contentScroll-calc::-webkit-scrollbar {
          height: 7px;
          background: #EEEEEE;
        }
        .contentScroll-calc::-webkit-scrollbar-thumb {
          background: #3466D6;
          border-radius: 2px;
        }
        .buttonMesureContainer {
          display: flex;
          width: 570px;
          margin: 0 auto;
        }
        .mesureLeftButton {
          cursor: pointer;  
          width: 148px;
          height: 28px;
          background: transparent;
          border: solid 1px #000;
          margin-top: 10px;
        }
        .mesureLeftButton svg {
          transform: rotate(90deg);
          height: 23px;
        }
        .mesureRightButton {
          cursor: pointer;  
          width: 148px;
          height: 28px;
          background: transparent;
          border: solid 1px #000;
          margin-top: 10px;
        }
        .mesureRightButton svg {
          transform: rotate(270deg);
          height: 23px;
        }
      `}</style>
    </>
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

const SelectedDate = styled.h3`
  width: 100%;
  text-align: center;
  color: #000;
`

const TextError = styled.h3`
  font-size: 11px;
  color: red;
  font-weight: 600;
  text-align: center;
`