import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProveedoresTable from "../components/ProveedoresTable";
import { useProveedores } from "../context/ProveedorProvider";
function ProveedoresPage() {

    const {proveedores, Proveedores} = useProveedores()
    const navigate = useNavigate()
    useEffect(() =>{
    Proveedores()  
    }, [])

    function renderMain() {
        if (proveedores.length === 0) {
            return <h1>Sin proveedores</h1>
            
        }
        return <ProveedoresTable proveedores={proveedores}/>
    }

    return(
        <div>
            <h1 className="text5-xl text-white font-bold text-center">Proveedores</h1>
                <button className="block my-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={ ()=> navigate(`/agregarProveedor`)}>
                    Agregar Proveedor
                </button>
            <div className="grid">
                {renderMain()}
            </div>

        </div>
    )
}

export default ProveedoresPage