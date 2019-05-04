import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const SingleParticipant = () => {
    return (
        <div className='singleParticipant borderSingle' >
            <div className='firstRow'>
            <div></div>
                <div>
                    <Image src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/virginia-albarracin.jpg' id='picture' roundedCircle />
                </div>
                <div style={{textAlign:'center'}}>
                    <h1 className='fontName'>Virginia Albarracin</h1>
                    <h4>Microbiología</h4>
                    <img src="baseline-location_on-24px.svg" />Buenos Aires, Argentina
                    <img src="iconmonstr-linkedin-3.png" className = 'linkedin'/> www.linkedin.com
                </div>
                <div></div> 
            </div>
            <div>
                <iframe style={{display:'block', margin:'30px auto'}} width="560" height="315" src="https://www.youtube.com/embed/sAgxHNwjSO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='thirdRow' style={{marginTop:'40px'}}>
                <div className='thirdRows' >
                    <div style={{textAlign:'center', margin:'auto'}}>
                        <h1 className='titles'>Un consejo</h1>
                        <p>"Haciendo ciencia e investigando sobre la vida de organismos vivos me siento una chica superpoderosa también!"</p>
                    </div>
                    <div style={{textAlign:'center', margin:'auto'}}>
                        <h1 className='titles'>Logros</h1>
                            <li>Colaboradora en ONG </li>
                            <li>Premio Ciencia Argentina 2019</li>
                    </div>
                </div>
                <div className='thirdRows'>
                    <div style={{textAlign:'center', margin:'auto'}}>
                        <h1 className='titles'>Educación</h1>
                            <li>Universidad de Buenos Aires</li>
                            <li>Universidad Argentina de la Empresa</li>
                    </div>
                    <div style={{textAlign:'center', margin:'auto'}}>
                        <h1 className='titles'>Un día de mi vida</h1>
                        <img src = 'https://static1.squarespace.com/static/56c564657da24f92b16de5e0/t/56ef557d01dbae35a1144641/1459036341017/' className='graph'></img>
                    </div>
                </div>
            </div>
        </div>
    )



}


export default SingleParticipant;