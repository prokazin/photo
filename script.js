function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 800);
});
