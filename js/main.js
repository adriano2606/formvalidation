import {passwordValidation, validatePasswordConfirmation, inputEmptyVerification} from './fieldsValidation.js'
import {showPassword, hidePassword} from './showPassword.js'

window.onload = () => {
const form = document.getElementById("form")
const fullNameField = document.getElementById("fullnameField")
const emailField = document.getElementById("emailField")
const passwordFields = Array.from(document.getElementsByClassName("passwordFields"))
const hidePasswordIcon = Array.from(document.querySelectorAll(".input-control .fa-eye"))
const showPasswordIcon = Array.from(document.querySelectorAll(".input-control .fa-eye-slash"))

let inputsList = [fullNameField, emailField, passwordFields[0], passwordFields[1]]

    function validateInputs(){
        inputsList.forEach(element => {
        inputEmptyVerification(element);
        });

        if (passwordFields[0].value !== ''){
            passwordValidation(passwordFields[0])
        }

        if (passwordFields[1].value !== ''){
            validatePasswordConfirmation(passwordFields[1],passwordFields[0] )
        }
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateInputs()
    })


    showPasswordIcon.forEach(function (element, index) {
        element.onclick = () => {
            showPassword(index, showPasswordIcon,hidePasswordIcon, passwordFields)
        }   
    })

    hidePasswordIcon.forEach(function (element, index) {
        element.onclick = () => {
            hidePassword(index, hidePasswordIcon, showPasswordIcon,passwordFields )
        }   
    })

}