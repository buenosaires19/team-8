import React from 'react';

import BtnHeader from './headerBtn';

const formCandidata = (props) => (
    <div>
        <BtnHeader/> 
              <div className='formStlyes'>
            <h3> Información personal </h3>
            <p> </p>
            <div className='formSpacing'>
                <label> Nombre y apellido </label>
                <input className="form-control" type="text" />
            </div>

            <div className='formSpacing'>
                <label> Dirección </label>
                <input className="form-control" type="text" />
            </div>

            <div className='formSpacing'>
                <label> Ciudad </label>
                <input className="form-control" type="text" />
            </div>

            <div className='formSpacing'>
                <p> Provincia </p>
                <select>
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

            <h3> Información de contacto </h3>
            <p> </p>
            <div className='formSpacing'>
                <label> Teléfono </label>
                <input className="form-control" type="text" />
            </div>

            <div className='formSpacing'>
                <label> E-mail </label>
                <input className="form-control" type="email" />
            </div>

            <h3> Información laboral </h3>
            <p> </p>
            <div className='formSpacing'>
                <label> Campo de desempeño </label>
                <input className="form-control" type="textarea" rows="1" />
            </div>

            <div className='formSpacing'>
                <label> Perfil de LinkedIn </label>
                <input className="form-control" type="textarea" rows="1" />
            </div>

            <div className='formSpacing'>
                <label> Información adicional</label>
                <input className="form-control" type="textarea" rows="4" />
            </div>

            <div className='formSpacing'>
                <input type="file" />
                <div>
                    <small> Adjunta tu cv o cualquier material extra que creas relevante para la validación
                    de tus logros
                    </small>
                </div>
            </div>

            <div className='formSpacing'>
                <input type="checkbox" /> <span> Acepto que mi perfil sea compartido en la página web de 'Chicas en tecnología' </span>
            </div>

            <div className='formSpacing'>
                <input type="checkbox" /> <span> No deseo que se publique mi telefono de contacto </span>
            </div>

            <div className='formSpacing'>
                <input type="checkbox" /> <span> No deseo que se publique mi e-mail </span>
            </div>

            <div className='formSpacing centerButton'>
                <button id='botonEstilos' onClick={() => {
                    alert('Se ha guardado la postulación correctamente!')
                    props.history.push('/')
                }}>POSTULATE!</button>
            </div>
        </div>
    </div >
)

export default formCandidata;