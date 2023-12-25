import React from 'react'


export default function AgregarEmpleado() {
  return (

    <div className='container'>
        <div className='container text-center' style={{margin:"30px"}}>
            <h3>
                Agregar Empleado
            </h3>

            <htmlForm>
                <div className="mb-3">
                    <label htmlFor="nombre" className="htmlForm-label">Nombre</label>
                    <input type="text" className="htmlForm-control" id="nombre" name='nombre' required={true} />
                
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="htmlForm-label">Departamento</label>
                    <input type="text" className="htmlForm-control" id="departamento" name='departamento'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="sueldo" className="htmlForm-label">Sueldo</label>
                    <input type="number" step='any' className="htmlForm-control" id="sueldo" name='sueldo'/>
                </div>
              
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3 ">Agregar</button>
                    <a href='/' className='btn btn-danger btn-sm me-3'>Regresar</a>
                </div>
                
            </htmlForm>
        
        </div>   
    </div>
  )
}
