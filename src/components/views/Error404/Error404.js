import React from 'react';
import { Image } from 'react-bootstrap';
import "./Error404.css"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
    
       <>
       <div> 
       <Link to='/'  >
               <button className="btn m-5 fs-6"> Volver🐾</button>
              </Link>  
       </div>

       <div className='d-flex justify-content-center'>

            <Image src='https://drive.google.com/uc?export=download&id=1-RCyh9A0GCYazZr7uczlMrXACMlGZP2U' className='error img-responsive d-flex justify-content-center w-50'  alt='imagen de error 404' />

        </div>

        </> 
    );
};

export default Error404;