import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function EditarEmpleado() {
    const urlBase = "html://localhost:8080/rh-app/empleados";

    let navegacion = useNavigate();

    const {id} =useParams();

    const [empleado, setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const{nombre,departamento,sueldo} = empleado

    useEffect(()=>{
        cargarEmpleado();

    })

    const cargarEmpleado = async() => {
        const resultado = await axios.get(`${urlBase}/${id}`)
        setEmpleado(resultado.data);
        
    }

    const onInputChange = (e) =>{
        //spread operator ... )(expandir los atributos)
        setEmpleado({...empleado,[e.target.name]:e.target.value});

    }

    const onSubmit = async ( e ) =>{
        e.preventDefault();
        await axios.post(urlBase, empleado);
        // Redirigimos a la pagina de inicio

        navegacion('/');

    }

  return (

    <div className='container'>
        <div className='container text-center' style={{margin:"30px"}}>
            <h3>
               Editar Empleado 
            </h3>

            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="htmlform-label">Nombre</label>
                    <input type="text" className="htmlform-control" id="nombre" name='nombre' required={true} value={nombre} onChange={(e)=>onInputChange(e)}/>
                
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="htmlform-label">Departamento</label>
                    <input type="text" className="htmlform-control" id="departamento" name='departamento' value={departamento} onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="sueldo" className="htmlform-label">Sueldo</label>
                    <input type="number" step='any' className="htmlform-control" id="sueldo" name='sueldo' value={sueldo} onChange={(e)=>onInputChange(e)}/>
                </div>
              
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3 ">Guardar</button>
                    <a href='/' className='btn btn-danger btn-sm me-3'>Regresar</a>
                </div>
                
            </form>
        
        </div>   
    </div>
  )
}
