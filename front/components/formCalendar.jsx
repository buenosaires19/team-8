import React from 'react';
import { Col, Row } from 'react-bootstrap';

const calendar = () => (


    <div className="calendarDiv">
        <Row>
            <Col>
                    <div className="tercioCalendario">

                        <p>
                            <strong className='mesCalendar'>Junio 2019</strong>
                        </p>


                        <p>
                            <strong className='areaCalendar'>Ingeniería Naval</strong>
                        </p>


                        <p>recepción de propuestas hasta</p>


                        <strong style={{fontSize:'1.2em'}}>15/05/19</strong>

                    </div>
            </Col>

            <Col>
                <div className="tercioCalendario" style={{
                    borderLeft: '2px solid #FF5A5F',
                    borderRight: '2px solid #FF5A5F'
                }}>
                        
                            <p>
                                <strong className='mesCalendar'>Julio 2019</strong>
                            </p>
                        
                            <p>
                                <strong className='areaCalendar'>Software Engineering</strong>
                            </p>
                        
                            <p>recepción de propuestas hasta</p>
                        
                            <strong style={{fontSize:'1.2em'}}>15/06/19</strong>
                </div>
            </Col>

            <Col>
                <div className="tercioCalendario">
                            <p>
                                <strong className='mesCalendar'> Agosto 2019</strong>
                            </p>
                        
                            <p>
                                <strong className='areaCalendar'>Energías Renovables</strong>
                            </p>
                        
                            <p>recepción de propuestas hasta</p>
                        
                            <strong style={{fontSize:'1.2em'}}>15/07/19</strong>
                </div>
            </Col>
        </Row>
    </div>

);

export default calendar;