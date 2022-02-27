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


let date = new Date();
let output = String( date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' +date.getDate()).padStart(2, '0');
console.log(output);
console.log(output);



export const validateDate =(campo)=>{
  if(campo > output){
  return true
  }else{
    return false
  }
}





