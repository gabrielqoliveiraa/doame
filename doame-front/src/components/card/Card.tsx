// import {CgProfile} from 'react-icons/cg';
import { CgProfile } from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import Btn from './Btn';
import './Card.css';

import { CardInterface } from '../model/CardInterface';

function Card(card:CardInterface) {

    return(
        <div className='card' >
            {/* user */}
            <div className='usuario'>
                <div className='profile'>
                    {card.urlFoto?<img src={card.urlFoto} alt='foto'/>:<CgProfile/>}    
                </div>
                <div className='nome_endereco'>
                    <h3 className='nome'>{card.nome}</h3>
                    <span>{card.endereco}</span>
                </div>
            </div>
            {/* text */}
            <div>
                <p>{card.texto}</p>
            </div>
            <hr/>
            {/* details */}
            <div className='detalhes'>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: {card.tipoSanguineo} </li>
                    <li><RiHealthBookFill/> Quantidade: {card.quantidade} </li>
                </ul>
            </div>
            {/* implementar barra de progresso */}
            <Btn onClick={card.onClick}
                textoBtn = {card.textoBtn} 
            />
            
        </div>
    )
}

export default Card;