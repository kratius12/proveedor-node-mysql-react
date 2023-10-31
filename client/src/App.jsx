import { Route, Routes } from "react-router-dom";
import ProveedoresPage from "./pages/ProveedoresPage";
import ProveedoresForm from "./pages/ProveedoresForm";
import Header from "./components/Header";
import { ProveedorContextProvider } from "./context/ProveedorProvider";
function App() {
  return (
    <div className="">
      <Header/>
      {/* <Navbar /> */}
      <div className="container mx-auto py-4 px20">
        <ProveedorContextProvider>
          <Routes>
            <Route path="/proveedor" element={<ProveedoresPage/>} />
            <Route path="/agregarProveedor" element={<ProveedoresForm/>} />
            <Route path="/editarProveedor/:id" element={<ProveedoresForm/>} />
          </Routes>
        </ProveedorContextProvider>
      </div>
    </div>
  )
}

export default App