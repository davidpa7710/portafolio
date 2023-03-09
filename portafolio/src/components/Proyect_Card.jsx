import React from 'react'
import './Proyect_Card.css'

const Proyect_Card = () => {
    function handleSubmit(e) {
        e.preventDefault();
        window.location.href = "https://gof1mx.com/"
      }
    return (
        <>
            <div className='website_card'>
                <img src="https://zhargullqfwuquyqmofs.supabase.co/storage/v1/object/sign/imagnes-data/Captura%20de%20Pantalla%202023-02-20%20a%20la(s)%2020.02.06.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnbmVzLWRhdGEvQ2FwdHVyYSBkZSBQYW50YWxsYSAyMDIzLTAyLTIwIGEgbGEocykgMjAuMDIuMDYucG5nIiwiaWF0IjoxNjc3MDA4NTI5LCJleHAiOjE3MDg1NDQ1Mjl9.TV1fcx26R93afclb0HgYy3OPYYudiklGoXGnuIZ-wFY&t=2023-02-21T19%3A42%3A09.131Z" alt="dummy" />
                <h2>GOF1MX</h2>
                <p>Una pagina de Noticias de la Formula 1 conectada a una base de Datos en SupaBase para alamcenar los articulos y la informacion de las escuderias y pilotos creada con Vite+React utilizando bootstrap.</p>
                <p className="icons"><i className="fa-brands fa-react" />
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i> 
                    <i class="fa-brands fa-square-js"></i>
                </p>
                <button className='button-40' onClick={handleSubmit}>Get in There</button>
            </div>
        </>
    )
}

export default Proyect_Card
