import * as Reveal from 'react-reveal'
import Card from '../components/Card'
import Content_card from '../components/Content_card'
import Proyect_Card from '../components/Proyect_Card'
import { Link } from 'react-router-dom'


function Home () {

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "mailto:davidpa7710@gmail.com"
  }

  return (
    <div className="home">
      <Reveal.Slide cascade top>
        <img src='../src/assets/Computer user.png' alt='img_c' className='computer_logo'></img>
        <div className="hero">
          <Reveal.Zoom cascade top left>
            <h1>Hello <br></br>
            I´m <b className='name'>David Palacios</b></h1>
            <h2>- FrontEnd Developer</h2>
            <p>Es es mi portafolio con un pequeño ejemplo de lo que e realizado como FrontEnd Developer</p>
          </Reveal.Zoom>
          <button type='button' className='btn-main' onClick={handleSubmit}> Contactame </button>
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
      <div className='card_slider2'>
        <Reveal.Fade right>
          <Proyect_Card />
          <Proyect_Card />
        </Reveal.Fade>
        <Reveal.Fade left>
          <Proyect_Card />
          <Proyect_Card />
        </Reveal.Fade>
      </div>
    </div >
  )
}

export default Home