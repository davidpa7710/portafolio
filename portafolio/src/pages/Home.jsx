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
        <img src='https://zhargullqfwuquyqmofs.supabase.co/storage/v1/object/sign/imagenes/Computer%20user.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZW5lcy9Db21wdXRlciB1c2VyLnBuZyIsImlhdCI6MTY4MTI1OTMzMSwiZXhwIjoxNzEyNzk1MzMxfQ.XSQtv_ZIIlCUzWsVzitl4m4Ig2epcP-ym1xjNLLdEvM&t=2023-04-12T00%3A28%3A51.654Z' alt='img_c' className='computer_logo'></img>
        <div className="hero">
          <Reveal.Zoom cascade top left>
            <h1>Hello <br></br>
            I´m <b className='name'>David Palacios</b></h1>
            <h2>- FrontEnd Developer</h2>
            <p>This is my portfolio with a small example of what I have done as a <br /> FrontEnd Developer</p>
          </Reveal.Zoom>
          <button type='button' className='btn-main' onClick={handleSubmit}> Contact Me </button>
        </div>
        <div className='about_me'>
          <Reveal.Zoom cascade top right>
            <h2> About Me </h2>
            <p>I'm a front end developer specialized in javascript and in the react 
              framework I have experience in page layout as well as in the use of Adobe and Figma tools, 
              I'm passionate about technology and the visual beauty of the web, 
              I'm also fascinated by Formula 1 and Video Games, <br />     
              I'm currently learning React Native for mobile development</p> 
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
        </Reveal.Fade>
      </div>
    </div >
  )
}

export default Home