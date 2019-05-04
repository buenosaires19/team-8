import React from 'react';

const formPostulacion = (props) => (
    <div >
        <div className='formStlyes'>
            <h2 className='h3Form' style={{fontFamily: '"Caveat Brush", cursive', fontSize:'3em', textAlign:'center'}}> <span className='underLine'>Postulá a alguna <strong> Gran Mujer </strong>que conozcas!</span></h2>
            <h3 className='h3Form'> Tus datos</h3>
            <p> </p>
            <div >
                <label><span className='camposTag'> Nombre y apellido</span> </label>
                <input className="form-control" type="textarea" rows="1" />
            </div>

            <div>
                <label> <span className='camposTag'>E-mail </span></label>
                <input className="form-control" type="email" name='emailPostulante' onChange={() => console.log('  holaaaaaa')} />
            </div>

            <h3 className='h3Form'> Datos de la postulada</h3>
            <p> </p>
            <div>
                <label> <span className='camposTag'>Nombre y apellido </span> </label>
                <input className="form-control" type="textarea" rows="1" />
            </div>

            <div>
                <label> <span className='camposTag'>E-mail </span></label>
                <input className="form-control" type="email" />
            </div>

            <div >
                <label><span className='camposTag'>Provincia</span></label>
                <select multiple className='form-control'>
                    <option> Buenos Aires </option>
                    <option> Catamarca </option>
                    <option> Chaco </option>
                    <option> Chubut </option>
                    <option> Ciudad Autónoma de Buenos Aires</option>
                    <option> Córdoba </option>
                    <option> Corrientes </option>
                    <option> Entre Ríos </option>
                    <option> Formosa </option>
                    <option> Jujuy </option>
                    <option> La Pampa </option>
                    <option> La Rioja </option>
                    <option> Mendoza </option>
                    <option> Misiones </option>
                    <option> Neuquén </option>
                    <option> Río Negro </option>
                    <option> Salta </option>
                    <option> San Juan </option>
                    <option> San Luis </option>
                    <option> Santa Cruz </option>
                    <option> Santa Fe </option>
                    <option> Santiago del Estero </option>
                    <option> Tierra del Fuego </option>
                    <option> Tucumán </option>
                </select>
            </div>

            <div>
                <label> <span className='camposTag'>Campo de desempeño</span> </label>
                <input className="form-control" type="textarea" rows="1" />
            </div>

            <div>
                <label> <span className='camposTag'>Más información</span> </label>
                <input className="form-control" type="textarea" style={{ height: '20vh' }} />
            </div>
            <div className='centerButton'>
                <button id='botonEstilos' onClick={() => {
                    alert('Se ha guardado la postulación correctamente!')
                    props.history.push('/')
                }}>POSTULA!</button>
            </div>
        </div>
    </div >

)

export default formPostulacion;