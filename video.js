const performanceAlbums = document.querySelectorAll('.performance-album');
const performanceLightbox = document.getElementById('performance-lightbox');
const performanceLightboxTitle = document.getElementById('performance-lightbox-title');
const lightboxVideos = document.querySelector('.lightbox-videos');
const closePerformanceLightbox = performanceLightbox.querySelector('.close');
const fullscreenVideo = document.getElementById('fullscreen-video');
const fullscreenVideoPlayer = document.getElementById('fullscreen-video-player');
const closeFullscreenVideo = fullscreenVideo.querySelector('.close-fullscreen');

performanceAlbums.forEach(album => {
    album.addEventListener('click', () => {
        const albumTitle = album.getAttribute('data-album');
        const videos = album.querySelectorAll('video');
        
        performanceLightboxTitle.textContent = albumTitle;
        lightboxVideos.innerHTML = '';
        
        videos.forEach(video => {
            const newVideo = document.createElement('video');
            newVideo.src = video.src;
            newVideo.addEventListener('click', () => {
                fullscreenVideoPlayer.src = video.src;
                fullscreenVideo.style.display = 'flex';
            });
            lightboxVideos.appendChild(newVideo);
        });
        
        performanceLightbox.style.display = 'flex';
    });
});

closePerformanceLightbox.addEventListener('click', () => {
    performanceLightbox.style.display = 'none';
});

closeFullscreenVideo.addEventListener('click', () => {
    fullscreenVideo.style.display = 'none';
    fullscreenVideoPlayer.pause();
});

performanceLightbox.addEventListener('click', (e) => {
    if (e.target === performanceLightbox) {
        performanceLightbox.style.display = 'none';
    }
});

fullscreenVideo.addEventListener('click', (e) => {
    if (e.target === fullscreenVideo) {
        fullscreenVideo.style.display = 'none';
        fullscreenVideoPlayer.pause();
    }
});