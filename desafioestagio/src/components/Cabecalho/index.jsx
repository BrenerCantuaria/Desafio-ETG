import { Link } from 'react-router-dom'
import './Cabecalho.css'


function Cabecalho (){
    return (
        <header>
            <Link to='/'>
                    <h1>HOME</h1>
            </Link>
        </header>
    )
}


export default Cabecalho;