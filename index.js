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