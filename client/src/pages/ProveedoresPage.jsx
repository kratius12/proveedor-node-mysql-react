import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmpleadoTable from "../components/ProveedoresTable";
import { useEmpleados } from "../context/ProveedoresProvider";
function EmpleadosPage() {

    const {empleados, Empleados} = useEmpleados()
    const navigate = useNavigate()
    useEffect(() =>{
    Empleados()  
    }, [])

    function renderMain() {
        if (empleados.length === 0) {
            return <h1>Sin proveedores</h1>
            
        }
        return <EmpleadoTable empleados={empleados}/>
    }

    return(
        <div>
            <h1 className="text5-xl text-white font-bold text-center">Proveedores</h1>
                <button className="block my-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={ ()=> navigate(`/agregarProveedor`)}>
                    Agregar Proveedores
                </button>
            <div className="grid">
                {renderMain()}
            </div>

        </div>
    )
}

export default EmpleadosPage