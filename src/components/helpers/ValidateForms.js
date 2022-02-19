// Regular expressions
const regEx4Names = /^[A-Za-z\s?]+$/;
const regEx4Selector = /^[A-Za-z\-\s?]+$/;
const regEx4Number = /[0-9]+$/;

export const validateNames = (campo) => {
  if (regEx4Names.test(campo) && campo.trim().length<23&& campo.trim().length>0 && campo !== "") {
    return true;
    
  } else {
      
    return false;
    


  }
};

export const validateVet = (campo) => {
  if ((regEx4Selector.test(campo) && campo === "emilse") || campo === "jony") {
    return true;
  } else {
    return false;
    
  }
};

export const validateDni = (campo) => {
  if (
    regEx4Number.test(campo) &&
    campo.trim() !== "" &&
    campo.trim() > 0 &&
    campo.trim() < 99999999&&
    campo.trim().length>=7
  ) {
    return true;
  } else {
    return false;
    
  }
};

export const validateSpecie = (campo) => {
  if (
    (regEx4Selector.test(campo) && campo === "ave") ||
    campo === "gato" ||
    campo === "perro" ||
    campo === "pez" ||
    campo === "reptil" ||
    campo === "roedor"
  ) {
    return true;
  } else {
    return false;
 
  }
};
