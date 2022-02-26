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





//  export const validateTime = (campo) => {
//    if (campo.value !== campo) {
//      return true;
//    } else {
//      return false;
//    }
//  };
