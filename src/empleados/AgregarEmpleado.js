import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function AgregarEmpleado() {

    let navegacion = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const{nombre,departamento,sueldo} = empleado


    const onInputChange = (e) =>{
        //spread operator ... )(expandir los atributos)
        setEmpleado({...empleado,[e.target.name]:e.target.value});

    }

    const onSubmit = async ( e ) =>{
        e.preventDefault();
        const urlBase = "html://localhost:8080/rh-app/empleados";
        await axios.post(urlBase, empleado);
        // Redirigimos a la pagina de inicio

        navegacion('/');

    }

  return (

    <div className='container'>
        <div className='container text-center' style={{margin:"30px"}}>
            <h3>
                Agregar Empleado
            </h3>

            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="htmlForm-label">Nombre</label>
                    <input type="text" className="htmlForm-control" id="nombre" name='nombre' required={true} value={nombre} onChange={(e)=>onInputChange(e)}/>
                
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="htmlForm-label">Departamento</label>
                    <input type="text" className="htmlForm-control" id="departamento" name='departamento' value={departamento} onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="sueldo" className="htmlForm-label">Sueldo</label>
                    <input type="number" step='any' className="htmlForm-control" id="sueldo" name='sueldo' value={sueldo} onChange={(e)=>onInputChange(e)}/>
                </div>
              
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3 ">Agregar</button>
                    <a href='/' className='btn btn-danger btn-sm me-3'>Regresar</a>
                </div>
                
            </form>
        
        </div>   
    </div>
  )
}
