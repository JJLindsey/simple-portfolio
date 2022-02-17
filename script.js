const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const toggle = document.querySelector('.toggle')

// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if(html.classList.contains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark Mode'
//         console.log('dark')
//     } else {
//         html.classList.add('dark')
//         e.target.innerHTML = 'Light Mode'
//         console.log('light')
//     }
// })

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
