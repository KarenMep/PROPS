import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";


function App() {
  return (
    <div className="container mt-5">
        <h1>Proyecto desde cero</h1>
        <Saludo persona='Karen' edad={30}/>
        <Saludo persona='Martha' edad={20}/>
        <Saludo persona='Rebeca' edad={10}/>
        <hr/>
        <h3>Cajita de comentarios</h3>

        <Comentario 
          urlImagen='https://picsum.photos/64'
          persona='Karen'
          texto='Este es un comentario'
        />
        <Comentario 
          urlImagen='https://picsum.photos/64'
          persona='Christian'
          texto='Este es otrooo comentario'
        />
        <Comentario 
          urlImagen='https://picsum.photos/64'
          persona='Basi'
          texto='Aqui hay otro comentario'
        />
        
    </div>
  );
}

export default App;
