import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';


class Finalistas extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel>
            <Carousel.Item>
            <div className = 'divCard'>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/leticia-escudero.jpg' className = 'cardImg' roundedCircle/>
            <Card.Body>
                    <Card.Title>Leticia Escudero</Card.Title>
                    <Card.Text className = 'cardText'>
                    Trabajo en el desarrollo de métodos de análisis químico...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>  
                    </div>
            </Card.Body> 
            </Card>
            </div>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/silvia-kochen.jpg' className = 'cardImg' roundedCircle/>
                <Card.Body>
                    <Card.Title>Silvia Kochen</Card.Title>
                    <Card.Text className = 'cardText'>
                    Trabajo en el estudio diagnóstico y terapéutico...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>
                    </div>
                </Card.Body>
            </Card>
            </div>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/magdalena-on.jpg' className = 'cardImg' roundedCircle/>
                <Card.Body>
                    <Card.Title>Magdalena Moreno</Card.Title>
                    <Card.Text className = 'cardText'>
                    Estoy estudiando los territorios de las redes de trata con...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>
                    </div>
                </Card.Body>
            </Card>
            </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className = 'divCard'>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/ana-on.jpg' className = 'cardImg' roundedCircle/>
            <Card.Body> 
                    <Card.Title>Ana Laura Diedrichs</Card.Title>
                    <Card.Text className = 'cardText'>
                    Mi investigación utiliza tecnologías como internet de las cosas y ...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>
                    </div>
                    </Card.Body>   
            </Card>
            </div>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/milagro-on.jpg' className = 'cardImg' roundedCircle/>
                <Card.Body>
                    <Card.Title>Milagro Teruel</Card.Title>
                    <Card.Text className = 'cardText'>
                    Me dedico a un subarea de la inteligencia artificial, con redes neuronales...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>
                    </div>
                </Card.Body>
            </Card>
            </div>
            <div className = 'cards'>
            <Card>
                <Image variant="top" src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/elsa-on.jpg' className = 'cardImg' roundedCircle/>
                <Card.Body>
                    <Card.Title>Magdalena Moreno</Card.Title>
                    <Card.Text className = 'cardText'>
                    Estoy estudiando los territorios de las redes de trata con...
                    </Card.Text>
                    <div className = 'linkContainer'>
                    <Link to = '/singleParticipant' className = 'link'>Ver Más...</Link>
                    </div>
                </Card.Body>
            </Card>
            </div>
            </div>
            </Carousel.Item>
            </Carousel>

            
      );
    }
  }
  
  export default Finalistas;