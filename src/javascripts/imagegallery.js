//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
const bigImage = document.getElementById('bigImage');
const thumbnails = document.querySelectorAll('.img-thumbnail');

// Set the initial big image source
bigImage.src = 'images/fish.jpg';

// Add click event listeners to the thumbnail images
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Update the big image source with the clicked thumbnail's source
        bigImage.src = thumbnail.src;
    });
});
