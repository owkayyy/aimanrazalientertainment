document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery_content');

    // Create the back button
    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = 'Back to Albums';
    backButton.addEventListener('click', showAlbums);
    document.body.insertBefore(backButton, gallery);

    // Replace this array with the logic to read folders dynamically
    const albums = [
        { name: 'gambar', images: ['AHKK6742.JPG', 'ARWD0580.JPG', 'AWKB3446.JPG'] },
        { name: 'gambar', images: ['DSZQ0715.JPG', 'EZIU7141.JPG', 'IMG_0446.JPG'] },
        { name: 'gambar', images: ['IMG_0544.JPG', 'IMG_0549.JPG', 'IMG_0695.JPG'] },
        { name: 'gambar', images: ['DSZQ0715.JPG', 'EZIU7141.JPG', 'IMG_0446.JPG'] },
        { name: 'gambar', images: ['IMG_0544.JPG', 'IMG_0549.JPG', 'IMG_0695.JPG'] },
        { name: 'gambar', images: ['DSZQ0715.JPG', 'EZIU7141.JPG', 'IMG_0446.JPG'] },
        { name: 'gambar', images: ['IMG_0544.JPG', 'IMG_0549.JPG', 'IMG_0695.JPG'] }
    ];

    function showAlbums() {
        gallery.innerHTML = ''; // Clear the gallery
        backButton.style.display = 'none'; // Hide the back button

        albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            
            album.images.forEach((imgName, index) => {
                if (index < 3) { // Show up to 3 images for fan-out effect
                    const img = document.createElement('img');
                    img.src = `${album.name}/${imgName}`;
                    albumDiv.appendChild(img);
                }
            });

            albumDiv.addEventListener('click', function() {
                const imagesContainer = document.createElement('div');
                imagesContainer.classList.add('images');
                gallery.innerHTML = ''; // Clear the gallery

                album.images.forEach(imgName => {
                    const imgDiv = document.createElement('div');
                    imgDiv.classList.add('image');
                    const img = document.createElement('img');
                    img.src = `${album.name}/${imgName}`;
                    imgDiv.appendChild(img);
                    imagesContainer.appendChild(imgDiv);
                });

                gallery.appendChild(imagesContainer);
                imagesContainer.style.display = 'flex';
                backButton.style.display = 'block'; // Show the back button
            });

            gallery.appendChild(albumDiv);
        });
    }

    showAlbums(); // Initial call to show albums
});
