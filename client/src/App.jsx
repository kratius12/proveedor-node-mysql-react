import {Route,Routes} from 'react-router-dom'
import ProveedoresPage from './pages/ProveedoresPage'
import FormTemplate from './pages/FormTemplate'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { ProveedorContextProvider } from './context/ProveedorProvider'

function App(){
  return(
    <div>
      <Header/>
      <Navbar/>
      <div className='container mx-auto py-4 px20'>
        <ProveedorContextProvider>
          <Routes>
            <Route path='/provs' element={<ProveedoresPage/>} />
            <Route path='/newProv' element={<FormTemplate/>} />
          </Routes>
        </ProveedorContextProvider>
      </div>
    </div>
  )
}
export default App