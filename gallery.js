document.querySelectorAll('.poker-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.style.display = "none";
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

// Function to toggle full-size image
document.querySelectorAll('.modal-images img').forEach(image => {
    image.addEventListener('click', () => {
        // Toggle class to expand or shrink image
        image.classList.toggle('full-size');
    });
});