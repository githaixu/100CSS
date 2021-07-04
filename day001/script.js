const hamburgerElement = document.getElementsByClassName('hamburger');
const lines = document.getElementsByClassName('line');
hamburgerElement[0].addEventListener('click', () => {
    Array.prototype.forEach.call(lines, (line) => {
        line.classList.remove('preload');
        line.classList.toggle('active');
    })
})