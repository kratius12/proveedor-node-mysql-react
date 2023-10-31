import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useProveedores } from "../context/ProveedorProvider";

export default function ProveedoresForm() {
//   const [agreed, setAgreed] = useState(false)

    const {createProveedor, getProveedor, updateProveedor} = useProveedores()
    const params = useParams()
    const navigate = useNavigate()
    const [proveedor, setProveedor] = useState({
      nombre:'',
      direccion:'',
      nit:'',
      tipo:'',
      estado:'',
      email:'',
      telefono:'',
      nombreContacto:'',
      telefonoContacto:'',
      emailContacto:''
    })
    useEffect(() =>{
        const loadProveedores = async () => {
            if (params.id) {
                const proveedor = await getProveedor(params.id)
                setProveedor({
                    nombre:proveedor.nombre,
                    direccion:proveedor.direccion,
                    nit:proveedor.nit,
                    tipo:proveedor.tipo,
                    estado:proveedor.estado,
                    email:proveedor.email,
                    telefono:proveedor.telefono,
                    nombreContacto:proveedor.nombreContacto,
                    telefonoContacto:proveedor.telefonoContacto,
                    emailContacto:proveedor.emailContacto
                })                
            }
        }
        loadProveedores()
    })

  return (
    <div className="isolate bg-white px-6 py-12 ">

        <Formik initialValues={proveedor}
            enableReinitialize={true}
            onSubmit={ async (values) =>{
                if (params.id) {
                   await updateProveedor(params.id, values)
                   navigate("/proveedor")
                }else{

                   await createProveedor(values)
                   navigate("/proveedor")
                }
                setProveedor({
                  nombre:'',
                  direccion:'',
                  nit:'',
                  tipo:'',
                  estado:'',
                  email:'',
                  telefono:'',
                  nombreContacto:'',
                  telefonoContacto:'',
                  emailContacto:''
                })
            }}>
            {({handleChange, handleSubmit, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="col-span-1">
            <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
            <input
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                onChange={handleChange} value={values.nombre}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="direccion" className="block text-sm font-semibold leading-6 text-gray-900">
              Direccion
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="direccion"
                id="direccion"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                onChange={handleChange} value={values.direccion}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="nit" className="block text-sm font-semibold leading-6 text-gray-900">
              Nit
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nit"
                id="nit"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                onChange={handleChange} value={values.nit}
              />
            </div>
          </div>    
          <div className="col-span-1">
              <label htmlFor="tipo" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo proveedor
              </label>
              <div className="mt-2">
                <select
                  id="tipo"
                  name="tipo"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={handleChange} value={values.tipo}
                >
                  <option value="">Seleccione tipo de proveedor</option>
                  <option value={'natural'}>Persona natural</option>
                  <option value={"juridica"}>Persona juridica</option>
                </select>
              </div>
            </div>  
            <div className="col-span-1">
              <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <div className="mt-2">
                <select
                  id="estado"
                  name="estado"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={handleChange} value={values.estado}
                >
                  <option value="">Seleccione el estado</option>
                  <option value={1}>Activo</option>
                  <option value={0}>Inactivo</option>
                </select>
              </div>
            </div>          
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.email}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">
              Telefono
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="telefono"
                id="telefono"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.telefono}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="nombreContacto" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre del contacto
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nombreContacto"
                id="nombreContacto"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.nombreContacto}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="telefonoContacto" className="block text-sm font-semibold leading-6 text-gray-900">
              Telefono del contacto 
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="telefonoContacto"
                id="telefonoContacto"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.telefonoContacto}
              />
            </div>
          </div> 
          <div className="col-span-1">
            <label htmlFor="emailContacto" className="block text-sm font-semibold leading-6 text-gray-900">
              Email del contacto
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="emailContacto"
                id="emailContacto"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.emailContacto}
              />
            </div>
          </div>                              
        </div>
        <div className="mt-10">
          <button disabled={isSubmitting}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {params.id ? "Actualizar": "Guardar"}
          </button>
        </div>
        </Form>
        )}
    </Formik>
    </div>
  )
}
