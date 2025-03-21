const flowersContainer = document.querySelector('.flowers');

function createFlower() {
    const flower = document.createElement('div');
    flower.innerHTML = '🌻';
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 2 + 3 + 's';
    flower.style.fontSize = Math.random() * 20 + 20 + 'px';
    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 300);

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transition = 'opacity 2s';
    setTimeout(() => {
        container.style.opacity = 1;
    }, 100);
});
