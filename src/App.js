import ListadoEmpleados from "./empleados/ListadoEmpleados";
import navegacion from "./plantilla/navegacion";
function App() {
  return (
    <div className="container">

      <navegacion/>
      <ListadoEmpleados/>

    </div>


  );
}

export default App;
