import React from 'react'
import './Proyect_Card.css'

const Proyect_Card = () => {
    function handleSubmit(e) {
        e.preventDefault();
        const website = e.target.dataset.website;
        if (website === 'gof1mx') {
            window.location.href = "https://gof1mx.com/";
        } else if (website === 'lenden') {
            window.location.href = "https://github.com/davidpa7710/lenden";
        }
    }
    return (
        <div className="website-container">
            <div className='website_card' name='gof1mx'>
                <img src="https://zhargullqfwuquyqmofs.supabase.co/storage/v1/object/sign/imagnes-data/Captura%20de%20Pantalla%202023-02-20%20a%20la(s)%2020.02.06.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnbmVzLWRhdGEvQ2FwdHVyYSBkZSBQYW50YWxsYSAyMDIzLTAyLTIwIGEgbGEocykgMjAuMDIuMDYucG5nIiwiaWF0IjoxNjc3MDA4NTI5LCJleHAiOjE3MDg1NDQ1Mjl9.TV1fcx26R93afclb0HgYy3OPYYudiklGoXGnuIZ-wFY&t=2023-02-21T19%3A42%3A09.131Z" alt="dummy" />
                <h2>GOF1MX</h2>
                <p>A Formula 1 News page connected to a database in SupaBase to store the articles and the information of the teams and drivers created with Vite+React using bootstrap.</p>
                <p className="icons"><i className="fa-brands fa-react" />
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i> 
                    <i class="fa-brands fa-square-js"></i>
                </p>
                <button className='button-40' data-website="gof1mx" onClick={handleSubmit}>Get in There</button>
            </div>
            <div className='website_card' name="lenden">
                <img src="https://zhargullqfwuquyqmofs.supabase.co/storage/v1/object/sign/imagnes-data/Captura%20de%20Pantalla%202023-02-20%20a%20la(s)%2020.02.06.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnbmVzLWRhdGEvQ2FwdHVyYSBkZSBQYW50YWxsYSAyMDIzLTAyLTIwIGEgbGEocykgMjAuMDIuMDYucG5nIiwiaWF0IjoxNjc3MDA4NTI5LCJleHAiOjE3MDg1NDQ1Mjl9.TV1fcx26R93afclb0HgYy3OPYYudiklGoXGnuIZ-wFY&t=2023-02-21T19%3A42%3A09.131Z" alt="dummy" />
                <h2>Lenden</h2>
                <p>A page connected to a database created using mongoDB created from expressJS and using Axios to make the api calls using ReactJs</p>
                <p className="icons"><i className="fa-brands fa-react " />
                    <i class="fa-brands fa-html5 "></i>
                    <i class="fa-brands fa-css3-alt "></i> 
                    <i class="fa-brands fa-square-js "></i>
                    <i class="fa-brands fa-node-js "></i>
                </p>
                <button className='button-40' data-website="lenden" onClick={handleSubmit}>Get in There</button>
            </div>
        </div>
    )
}

export default Proyect_Card
