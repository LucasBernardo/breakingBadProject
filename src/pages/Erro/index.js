import { Link } from 'react-router-dom';
import '../../styles/erro.css'

export default function Erro(){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h3>Conteúdo não encontrado</h3>
            <Link className='' to='/'>Retornar a Home</Link>
        </div>
    )
}