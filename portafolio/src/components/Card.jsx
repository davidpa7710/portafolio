import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars" />
              <h2 className="java">HTML</h2>
              <p className="java">3 years of solid knowledge in HTML5 and its components for implementation in frontend Frameworks</p>
            </div>
          </div>
          <div className="face face2">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars" />
              <h2 className="python">CSS</h2>
              <p className="python">3 years of experience using CSS for the implementation of styles and animations in the elements</p>
            </div>
          </div>
          <div className="face face2">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars" />
              <h2 className="cSharp">JavaScript</h2>
              <p className="cSharp">3 years of experience in JavaScript as the main programming language, with knowledge in object-oriented programming, handling arrays as well as handling JavaSCrip Vanilla</p>
            </div>
          </div>
          <div className="face face2">
            <h2>JavaScript</h2>
          </div>
        </div>
      </div>
    )
}

export default Card
