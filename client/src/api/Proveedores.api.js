import axios from 'axios';

export const GetProveedoresRequest = async()=>{
    return await axios.get('http://localhost:4000/provs')
}

export const GetProveedorRequest = async(idProv)=>{
    return await axios.get(`http://localhost:4000/prov/${idProv}`)
}

export const CreateProveedorRequest = async(proveedor)=>{
    return await axios.post('http://localhost:4000/prov', proveedor)
}

export const UpdateProveedorRequest = async(idProv,proveedor)=>{
    return await axios.put(`http://localhost:4000/prov/${idProv}`,proveedor)
}

export const DeleteProveedorRequest = async(idProv)=>{
    return await axios.delete(`http://localhost:4000/${idProv}`)
}