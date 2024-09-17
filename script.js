const images = [
    "images/image1.jpg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpg",
    "images/image5.jpeg",
    "images/image6.jpeg",
    "images/image7.jpeg" 
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnails = document.querySelectorAll(".thumbnail");

function updateGallery() {
    galleryImage.src = images[currentIndex];
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateGallery();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateGallery();
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updateGallery();
    });
});

function changeImage(index) {
    currentIndex = index;
    updateGallery();
}

// Initialize the gallery with the first image
updateGallery();
