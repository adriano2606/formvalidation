export function showPassword(index, showPasswordIcon, hidePasswordIcon,passwordFields) {
    showPasswordIcon[index].classList.remove('visible')
    showPasswordIcon[index].classList.add('hidden')
    hidePasswordIcon[index].classList.remove('hidden')
    hidePasswordIcon[index].classList.add('visible')
    passwordFields[index].type = 'text'
}

export function hidePassword(index, hidePasswordIcon, showPasswordIcon, passwordFields) {
    hidePasswordIcon[index].classList.remove('visible')
    hidePasswordIcon[index].classList.add('hidden')
    showPasswordIcon[index].classList.remove('hidden')
    showPasswordIcon[index].classList.add('visible')
    passwordFields[index].type = 'password'
}

