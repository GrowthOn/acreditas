const form = document.querySelector('form')
const fields = [...document.querySelectorAll('input')].filter(field => field.type !== 'hidden')
const formButton = document.querySelector('form button')
const header = document.querySelector('header')
const logo = document.querySelector('#logo')
const menuItems = [...document.querySelectorAll('nav ul li a')]

window.onload = () => {
    fields.forEach(field => field.value = '')
}

[logo, ...menuItems].forEach(item => item.addEventListener('click', e => {
    const {id} = e.target
    body.removeEventListener('touchstart', closeMenu)
    if (id === 'logo') return
    menu.classList.toggle('menu-closed')
}))

const body = document.querySelector('body')
const nav = document.querySelector('nav')
const menu = document.querySelector('nav ul')
const toggleButton = document.querySelector('#menu-toggle')

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('menu-closed')
    body.addEventListener('touchstart', closeMenu)
})

const closeMenu = e => {
    if (e.target !== nav && menuItems.indexOf(e.target) === -1 && e.target !== toggleButton) {
        menu.classList.toggle('menu-closed')
        body.removeEventListener('touchstart', closeMenu)
    }
}