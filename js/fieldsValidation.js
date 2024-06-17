import {setErrorFor, setSuccessFor} from './setErrorOrSucess.js'


export function passwordValidation(passwordInput){
    if (passwordInput.value.length < 8){
        setErrorFor(passwordInput, 'A senha deve ser conter 8 digitos ou mais')
    } else if (!isThereSpecialCharacter(passwordInput)){
            setErrorFor(passwordInput, 'A senha deve conter pelo menos 1 caracter especial')
    }
}

export function isThereSpecialCharacter(passwordInput){
    const pattern = "[^A-Za-z0-9]"
    if (passwordInput.value.match(pattern) !== null){
        return true
    } else{
        return false
    }
}   

export function validatePasswordConfirmation(PasswordInputConf, PasswordInput){
    if (PasswordInputConf.value !== PasswordInput.value){
        setErrorFor(PasswordInputConf, 'A confirmação está divergente da senha digitada no campo acima')
    }
}

export function inputEmptyVerification(input){
    if (input.value === ''){
        const inputControl = input.parentElement;
        const label = inputControl.querySelector("label").innerText
        setErrorFor(input,label + ' é um campo obrigatório' )
    } else {
        setSuccessFor(input)
    }
}
