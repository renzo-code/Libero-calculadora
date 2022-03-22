import React, { useState } from 'react'
import styled from 'styled-components'

const Social = () => {

    const [copy, setCopy] = useState(false)

    const handleFalse = () => setCopy(false)

    const handleIframe = () => {
        navigator.clipboard.writeText('https://especiales.libero.pe/calculadora-eliminatoria-qatar-2022')
        setCopy(true)
        setTimeout(handleFalse, 2000)
    }

    return (
        <ContainerSociales>
            <SocialesInner>
                <span className='sociales'>
                    <a id="id-btn-fb" className="btn-fb btn-Social" data-social="facebook" href="javascript:void(0)" rel="noopener">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                            </path>
                        </svg>
                    </a>
                    <a id="id-btn-twt" className="btn-twt btn-Social" data-social="twitter" href="javascript:void(0)" rel="noopener">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg>
                    </a>
                    <a id="id-btn-wsp" className="btn-copy" href="javascript:void(0)" rel="noopener" onClick={handleIframe}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M383.168,113.227c-0.537-1.284-1.319-2.451-2.304-3.435L274.197,3.125c-2.002-1.991-4.707-3.114-7.531-3.125H96
                                        c-5.891,0-10.667,4.776-10.667,10.667v32h-32c-5.891,0-10.667,4.776-10.667,10.667V416c0,5.891,4.776,10.667,10.667,10.667
                                        h277.333c5.891,0,10.667-4.776,10.667-10.667v-32h32c5.891,0,10.667-4.776,10.667-10.667v-256
                                        C383.997,115.923,383.714,114.527,383.168,113.227z M277.333,36.416l70.251,70.251h-70.251V36.416z M320,405.333H64V64h21.333
                                        v309.333C85.333,379.224,90.109,384,96,384h224V405.333z M362.667,362.667h-256V21.333H256v96c0,5.891,4.776,10.667,10.667,10.667
                                        h96V362.667z"/>
                            </g>
                        </svg>
                    </a>
                </span>
                
            </SocialesInner>
            {
                copy
                ? <p className='copy-text'>URL copiado en el portapapeles</p>
                : null
            }
           <style jsx={true}>{`
                    span.sociales {
                        float: right;
                        margin-top: 7px;
                    }
                    span.sociales a.btn-fb {
                        background-position: 0 0;
                        background-repeat: no-repeat;
                    }
                    span.sociales a.btn-twt {
                        background-position: 0 -43px;
                        background-repeat: no-repeat;
                    }
                    span.sociales a.btn-wsp {
                        background-position: 0 -86px;
                        background-repeat: no-repeat;
                    }
                    
                    span.sociales [class*="btn-"] {
                        display: inline-block;
                        width: 43px;
                        height: 43px;
                        padding: 8px;
                        background-color: #000;
                    }
                    span.sociales [class*="btn-"]:hover {
                        background-color: #2c2c2c;
                    }
                    span.sociales [class*="btn-"]:last-of-type {
                        background-color: #3466D6;
                    }
                    svg {
                        height: 100%;
                        width: 100%;
                        color: #fff;
                    }
                    .copy-text {
                        position: absolute;
                        right: 0;
                        top: 50px;
                        width: 129px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                    }
                `}</style>
        </ContainerSociales >
    )
}

export default Social

const ContainerSociales = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
`
const SocialesInner = styled.div`
  height: 50px;
  position: absolute;
  right: 0;
`