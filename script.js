const button = document.querySelector('.share')
const popup = document.querySelector('.popup')

button.addEventListener('click', () => {
    popup.classList.toggle('active')
    button.classList.toggle('active')
    console.log('clicked')
    console.log(popup.classList)

})