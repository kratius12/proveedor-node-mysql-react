import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-neutral-800 flex justify-between px-20 py-4'>
            <Link to='/'>
                <h1 className='text-white font-bold'>React MySql</h1>
            </Link>
            <ul className='flex gap-x-1'>
                <li>
                    <Link to='/' className='bg-slate-200 px-2 py-1'>Home</Link>
                </li>
                <li>
                    <Link to='/new' className='bg-slate-200 px-2 py-1'>Nuevo Proveedor</Link>
                </li>
                <li>
                    <Link to='/FormTemplate' className='bg-slate-200 px-2 py-1'>Template Formulario</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar