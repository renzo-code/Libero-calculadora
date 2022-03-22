import React from 'react'
import styled from 'styled-components'

const Acordeon = () => {
  return (
    <>
      <div className="row top-row">
        <div className="col">
          <p>
            La calculadora de la Eliminatoria Sudamericanas a Qatar 2022 se hace presente en esta recta final del proceso clasificatorio para la Copa del Mundo. Disfruta del simulador digital que todo aficionado de la Selección Peruana necesita.
            De una manera proactiva y con la fe que todo hincha de la Bicolor necesita, saca tus cálculos de acuerdo a los diferentes partidos y genera tus propios pronósticos las veces que quieras.
          </p>
          <p>
            A falta de dos fechas para que finalicen las Clasificatorias Qatar 2022 el equipo de Ricardo Gareca está en zona de repechaje. ¿Logrará llegar al Mundial? Descubrelo en el simulador eliminatorias Qatar 2022.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="tabs">
            <div className="tab">
              <input type="radio" id="rd1" name="rd" />
              <label className="tab-label" htmlFor="rd1">¿Cuántos equipos clasifican al Mundial Qatar 2022?</label>
              <div className="tab-content">
                Tal como se dio en las últimas Copas del Mundo de la FIFA, Qatar 2022 contará con la participación de 32 selecciones de diferentes países de América, África, Asia Europa y Oceanía, en caso el equipo de este último continente supere el repechaje.
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd2" name="rd" />
              <label className="tab-label" htmlFor="rd2">¿Cuántos equipos de Sudamérica clasifican al Mundial Qatar 2022?</label>
              <div className="tab-content">
                Sudamérica cuenta con 4 cupos fijos para el Mundial Qatar 2022 y un medio boleto para el repechaje de esta cita deportiva, por lo que podrían clasificar hasta 5 naciones diferentes.
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd3" name="rd" />
              <label className="tab-label" htmlFor="rd3">¿Cuándo es el mundial de Qatar?</label>
              <div className="tab-content">
                La Copa del Mundo Qatar 2022 se jugará entre el 21 de noviembre y 18 de diciembre. Por cuestiones climáticas en el país organizador, esta edición del Mundial será la primera en no disputarse a mediados de año.
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd4" name="rd" />
              <label htmlFor="rd4" className="tab-close">Cerrar todo &times;</label>
            </div>
          </div>
        </div>
      </div>
      <style jsx={true}>{`
      .top-row p {
        font-size: 115%;
        line-height: 22px;
        margin-top: 10px;
      }

      input {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }

      .row {
        display: flex;
        width: 660px;
        margin: 0 auto;
        margin-top: 30px !important;
        max-width: 100%;
      }
      .row .col {
        flex: 1;
      }
      .row .col:last-child {
        margin-left: 1em;
        margin-right: 1em;
      }

      /* Accordion styles */
      .tabs {
        overflow: hidden;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
      }

      .tab {
        width: 100%;
        color: #fff;
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: #3466D6;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid #0a5989;
        line-height: 25px;
        /* Icon */
      }
      .tab-label:hover {
        background: #0a5989;
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        color: #000;
        background: white;
        transition: all 0.35s;
        font-size: 115%;
        line-height: 22px;
      }
      .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: #000;
        cursor: pointer;
      }
      .tab-close:hover {
        background: #1a252f;
      }

      input:checked + .tab-label {
        background: #0a5989;
      }
      input:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }
      `}</style>
    </>
  )
}

export default Acordeon