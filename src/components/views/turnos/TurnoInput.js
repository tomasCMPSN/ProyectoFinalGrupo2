import React, {useEffect, useRef, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom'

const TurnoInput = (DB) => {

    const [dniBuscado, setDniBuscado]=useState('');
  
  const inputref = useRef()

    useEffect(() => {
      
        inputref.current.disabled = true
      
      }, []);
    
  
    const handleClick = () =>{
      
    
        inputref.current.disabled = false
      

    }



    const handleChange= (e)=>{
        setDniBuscado(e.target.value)

      
    }


    return (
        <div className='my-3 text-center'>
           
            <Form >
                <input type="text" placeholder='Buscar paciente por dni'  ref={inputref}
                
                onChange={handleChange}
                onClick={ handleClick }/>
               <Button >
                    Buscar 
                </Button> 
                
            </Form>
            
        </div>
    );
};

export default TurnoInput;