document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});
