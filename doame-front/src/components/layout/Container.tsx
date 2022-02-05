import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Pedidos from '../pages/Pedidos';
import BtnPedido from './BtnPedido';
// import Settings from '../pages/Settings';
// import AbrirPedido from './AbrirPedido';
import './Container.css';
// import Doar from '../pages/Doar';

function Container() {

    
    return(
      <div id="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
            {/* <Route path='/configurar' element={<Settings/>}/> */}
            {/* <Route path='/doar' element={<Doar/>}/> */}
            {/* <Route path='/atualizarpedido' element={<Atualizar/>}/> */}
        </Routes>
        <BtnPedido/>
        </div>
    )
}
export default Container;
