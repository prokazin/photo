// Lightbox функции без изменений
function openLightbox(img) { /* ... */ }
function closeLightbox() { /* ... */ }

// Скрываем прелоадер после загрузки
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 800); // после fade out
});
