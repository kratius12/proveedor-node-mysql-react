import { Route, Routes } from "react-router-dom";
import EmpleadosPage from "./pages/ProveedoresPage";
import EmpleadosForm from "./pages/ProveedoresForm";
import Header from "./components/Header";
import { EmpleadoContextProvider } from "./context/ProveedoresProvider";
function App() {
  return (
    <div className="">
      <Header/>
      {/* <Navbar /> */}
      <div className="container mx-auto py-4 px20">
        <EmpleadoContextProvider>
          <Routes>
            <Route path="/proveedor" element={<EmpleadosPage/>} />
            <Route path="/agregarProveedor" element={<EmpleadosForm/>} />
            <Route path="/editarProveedor/:id" element={<EmpleadosForm/>} />
          </Routes>
        </EmpleadoContextProvider>
      </div>
    </div>
  )
}

export default App