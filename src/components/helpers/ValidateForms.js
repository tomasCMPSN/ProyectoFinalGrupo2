// Regular expressions
const regEx4Names = /^[A-Za-z\s?]+$/;
const regEx4Selector = /^[A-Za-z\-\s?]+$/;



export const validateNames = (campo) => {
  if (
    regEx4Names.test(campo) &&
    campo.trim().length < 23 &&
    campo.trim().length > 0 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};



export const validateVet = (campo) => {
  if (
    regEx4Selector.test(campo) &&
    
    (campo === "Dra Marta Minujin" ||
      campo === "Dr Jorge Ignacio" 
      )
  ) {
    return true;
  } else {
    return false;
  }
};



let date = new Date()
let output = date.getFullYear()+ '-'+ `${(date.getMonth()+1)}`.padStart(2,'0') + '-' + `${(date.getDate())}`.padStart(2,'0') 
let output2 = date.getFullYear()+ '-'+ `${(date.getMonth()+1) + 1}`.padStart(2,'0') + '-' + `${(date.getDate())}`.padStart(2,'0') 



export const validateDate =(campo)=>{

 
  if( campo <= output2 && campo > output) {
  return true
  }else{
    return false
  }
}





export const validateTime = (campo)=>{
  
  if(campo === '08:00' ||
 campo === '09:00' ||
 campo === '10:00' ||
 campo === '11:00' ||
 campo === '12:00' ||
 campo === '17:00' ||
 campo === '18:00' ||
 campo === '19:00' ||
 campo === '20:00' )
  {
  return true
  }else if(campo === 'seleccione'){
    return false
  }
}

