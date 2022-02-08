import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const siteDados = {
    nome:"DoaMe",
    ano:"2022",
}

function Footer( ) {
    return(
        <footer className='footer'>
             <ul >
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
             </ul>
             <p id='copy_right'><span>{siteDados.nome}</span> &copy; {siteDados.ano}</p>
        </footer>
    )
}


export default Footer;