document.addEventListener('click', function playAudio() {
    document.getElementById('backgroundMusic').play();
    document.removeEventListener('click', playAudio); // Удаляем обработчик после первого клика
});