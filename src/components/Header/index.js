import '../../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className='listItem' to='/'>Home</Link>
            <Link className='listItem' to='/episodios'>Episódios</Link>
            <Link className='listItem' to='/personagens'>Personagens</Link>
        </header>
    )
}