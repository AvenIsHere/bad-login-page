let button = document.getElementById("submit");
button.addEventListener('mouseenter', () => {
    button.style.position = "absolute";
    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

button.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})

window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})