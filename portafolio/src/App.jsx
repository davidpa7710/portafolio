import * as Reveal from 'react-reveal'
import './App.css'
import Card from './components/Card'
import Content_card from './components/Content_card'

function App() {

  return (
    <div className="App">
      <Reveal.Slide cascade top>
        <img src='../src/assets/Computer user.png' alt='img_c' className='computer_logo'></img>
        <div className="hero">
          <Reveal.Zoom cascade top left>
            <h1>Hello <br></br>
              I´m David Palacios</h1>
            <h2>I´m FrontEnd Developer</h2>
            <p>Es es mi portafolio con un pequeño ejempo de lo que e realizado como FrontEnd Developer</p>
          </Reveal.Zoom>
          <button type='button' className='btn-main'> Contactame </button>
        </div>
        <div className='about_me'>
          <Reveal.Zoom cascade top right>
            <h2> About Me </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi repellat beatae libero adipisci cupiditate facilis numquam, architecto labore error ullam, quaerat excepturi mollitia veritatis. Harum ad doloremque magnam delectus tempora adipisci nulla, dolores ipsam sunt saepe atque laboriosam, quis optio dicta qui, nam debitis!</p>
          </Reveal.Zoom>
        </div>
      </Reveal.Slide>
      <Reveal.Fade right>

      <h2 className="title_card">Principal Knockledge</h2>
      </Reveal.Fade>
      <div className='card_slider'>
        <Reveal.Fade left>
          <Card />
        </Reveal.Fade>
      </div>
      <Reveal.Roll>
        <Content_card />

      </Reveal.Roll>
    </div >
  )
}

export default App
