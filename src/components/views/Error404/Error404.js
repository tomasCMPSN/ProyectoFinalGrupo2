import React from 'react';
import { Image } from 'react-bootstrap';
import "./Error404.css"

const Error404 = () => {
    return (
        <div>
            <Image src='img/Error404.png' className='error img-responsive'  alt='' />
        </div>
    );
};

export default Error404;