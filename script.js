const button = document.getElementById('share')
const popup = document.getElementById('popup')

button.addEventListener('click', () => {
    popup.classList.toggle('active')
    button.classList.toggle('active')
    console.log('clicked')
    console.log(popup.classList)

})