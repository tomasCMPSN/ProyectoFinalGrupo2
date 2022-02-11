// Regular expressions
const regEx4Names = /^[A-Za-z\s?]+$/;
const regEx4Vet = /^[A-Za-z\-\s?]+$/;

export const validateNames = (campo) =>{
    if(regEx4Names.test(campo) && campo.trim() !==''){
        return true;
    } else{
        return false;
    }
};

export const validateVet = (campo) =>{
    if(regEx4Vet.test(campo)&& 
    campo === 'emilse'||
    campo === 'jony'){
        return true
    }else{
        return false
    }
};