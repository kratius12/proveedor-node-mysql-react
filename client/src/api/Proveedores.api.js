import axios from "axios";

export const GetEmpleadosRequest = async () =>{
    return await axios.get('http://localhost:4000/provs')
}

export const CreateEmpleadoRequest = async (empleado) => {
    return await axios.post('http://localhost:4000/prov', empleado)
}

export const DeleteEmpleadoRequest = async (idEmp) =>{
    return await axios.delete(`http://localhost:4000/prov/${idEmp}`)
}

export const GetEmpleadoRequest = async (idEmp) => {
    return await axios.get(`http://localhost:4000/prov/${idEmp}`)
}

export const UpdateEmpleadoRequest = async (idEmp, newFields) =>{
    return await axios.put(`http://localhost:4000/prov/${idEmp}`, newFields)
}

export const ToggleEmpleadoStatusRequest = async (idEmp, status) =>{
    return await axios.put(`http://localhost:4000/empleado/${idEmp}`, status)
}