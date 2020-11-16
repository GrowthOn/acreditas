const form = document.querySelector('form')
const fields = document.querySelectorAll('input')
const button = document.querySelector('button')

fields.forEach(field => {
    field.addEventListener('input', () => {
        return button.disabled = !form.checkValidity()
    })
})