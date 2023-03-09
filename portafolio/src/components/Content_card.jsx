import React from 'react'
import './Content_card.css'
import * as Reveal from 'react-reveal'

function Content_card() {
    return (
        <div className='card_react'>
            <Reveal.Rotate top left cascade>
                <img src='https://zhargullqfwuquyqmofs.supabase.co/storage/v1/object/sign/imagnes-data/react.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnbmVzLWRhdGEvcmVhY3Quc3ZnIiwiaWF0IjoxNjc3MDA4NDg0LCJleHAiOjE3MDg1NDQ0ODR9.rJ1O1tKMB-XHqu3hOvnkWhYYjilI5mfkypq4D1pah0s&t=2023-02-21T19%3A41%3A24.281Z' className='react-logo'></img>
            </Reveal.Rotate>
            <Reveal.Zoom cascade top left>
                <h2>Frontend FrameWork React</h2>
                <p>I use React as the main FrontEnd Framework through the use of Hooks and classes, 
                    I can develop React natively or using Next.JS or Vite for better code performance 
                    and agile development, 
                    I apply development methodologies to maintain the page at same as for continuous development</p>
            </Reveal.Zoom>
        </div>
    )
}

export default Content_card
