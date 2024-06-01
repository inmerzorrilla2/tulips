
import './App.css'
import Tulips from './components/Tulips'

function App() {


  return (
    <div>
      <h1>¡Feliz sábado, mi guapa Celia!</h1>
      <hr />
      <div className="tulips">
      <Tulips 
      name="Con tus flores favoritas, te digo:"
      color="¡Feliz sábado! Amor mío!"
      image="/assets/tulip1.jpg"
      />
      <Tulips 
      name="Descansa y disfruta de la paz de nuestro nido!"
      color="¡Te mereces esto y mucho más!"
      image="/assets/tulip2.jpg"
      />
      <Tulips 
      name="¡Algo me dice que lo mejor está por venir!"
      color="¡Atte, tu esposo Inmer. ¡Te amo, amor mío!"
      image="/assets/tulip3.jpg"
      />
      </div>
    </div>
  )
}

export default App
