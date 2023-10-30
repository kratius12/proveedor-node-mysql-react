import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEmpleados } from "../context/ProveedoresProvider";

export default function EmpleadosForm() {
//   const [agreed, setAgreed] = useState(false)

    const {createEmpleado, getEmpleado, updateEmpleado} = useEmpleados()
    const params = useParams()
    const navigate = useNavigate()
    const [empleado, setEmpleado] = useState({
        nombre:"",
        direccion:"",
        estado:"",
        email:"",
        telefono:"",
        tipoDoc:"",
        cedula:""
    })
    useEffect(() =>{
        const loadEmpleados = async () => {
            if (params.id) {
                const empleado = await getEmpleado(params.id)
                setEmpleado({
                    nombre:empleado.nombre,
                    direccion:empleado.direccion,
                    estado:empleado.estado,
                    email:empleado.email,
                    telefono:empleado.telefono,
                    tipoDoc:empleado.tipoDoc,
                    cedula:empleado.cedula
                })                
            }
        }
        loadEmpleados()
    })

  return (
    <div className="isolate bg-white px-6 py-12 ">

        <Formik initialValues={empleado}
            enableReinitialize={true}
            onSubmit={ async (values) =>{
                if (params.id) {
                   await updateEmpleado(params.id, values)
                   navigate("/empleados")
                }else{

                   await createEmpleado(values)
                   navigate("/empleados")
                }
                setEmpleado({
                  nombre:"",
                  direccion:"",
                  estado:"",
                  email:"",
                  telefono:"",
                  tipoDoc:"",
                  cedula:""
                })
            }}>
            {({handleChange, handleSubmit, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="col-span-1">
            <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombres
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
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="family-name"
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
            <label htmlFor="cedula" className="block text-sm font-semibold leading-6 text-gray-900">
              Cedula
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="cedula"
                id="cedula"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange} value={values.cedula}
              />
            </div>
          </div>
          <div className="col-span-1">
              <label htmlFor="tipoDoc" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo documento
              </label>
              <div className="mt-2">
                <select
                  id="tipoDoc"
                  name="tipoDoc"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={handleChange} value={values.tipoDoc}
                >
                  <option value="">Seleccione tipo cedula</option>
                  <option value="CC">Cedula ciudadania</option>
                  <option value="CE">Cedula extranjeria</option>
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
                  <option value="">Seleccione estado</option>
                  <option value={1}>Activo</option>
                  <option value={0}>Inactivo</option>
                </select>
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
