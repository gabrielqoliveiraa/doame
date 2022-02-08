import Card from '../card/Card';
import { CardInterface } from '../model/CardInterface';

function Home() {
    const card: CardInterface = {
        urlFoto: "https://avatars.githubusercontent.com/u/76014754?v=4",
        nome: "Myller Silva",
        endereco: "Manaus - AM",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam...",
        tipoSanguineo: "O+",
        quantidade: "2L",
        textoBtn: "doar",
        telefone:"85 987654321",
        onClick: ()=> {
            console.log("doar");
            // console.log(card);
        },
    }
    
    return(
        <div id="home">
            <h1>Todos os pedidos</h1>
            {/* template: */}
            <Card 
                urlFoto={card.urlFoto}
                nome = {card.nome}
                endereco = {card.endereco}
                texto = {card.texto}
                tipoSanguineo = {card.tipoSanguineo}
                quantidade = {card.quantidade}
                textoBtn = {card.textoBtn}
                onClick = {card.onClick}
                telefone={card.telefone}
            />
        </div>
    )
}

export default Home;