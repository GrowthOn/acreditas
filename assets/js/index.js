const form = document.querySelector('form')
const fields = [...document.querySelectorAll('input')]
const button = document.querySelector('button')

window.onload = () => {
    fields.filter(field => field.type !== 'hidden').forEach(field => field.value = '')
    button.disabled = true
}

fields.forEach(field => {
    field.addEventListener('input', () => button.disabled = !form.checkValidity())
})