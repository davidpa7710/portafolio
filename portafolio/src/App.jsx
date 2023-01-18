import * as Reveal from 'react-reveal'
import './App.css'
import Card from './components/Card'

function App() {

  return (
      <div className="App">
    <Reveal.Fade bottom>
        <div className="hero">
          <h1> Hola Mi Nombre Es David Palacios</h1>
          <h2>Soy FrontEnd Developer</h2>
          <p>Es es mi portafolio con un peqeño ejempo de lo que e realizado como FrontEnd Developer</p>
          <button type='button' className='btn-main'> Contactame </button>
        </div>
    </Reveal.Fade>
      <div className='card_slider'>
    <Reveal.Fade left>
    <Card />
    <Card />
    </Reveal.Fade>
    </div>
    </div>
  )
}

export default App
