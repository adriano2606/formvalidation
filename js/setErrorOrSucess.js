export function setErrorFor(input, TextMessage){
    const inputControl = input.parentElement;
    const messageField = inputControl.querySelector("span")
    messageField.innerText = TextMessage
    inputControl.className = 'input-control error'
}

export function setSuccessFor(input){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success'
}