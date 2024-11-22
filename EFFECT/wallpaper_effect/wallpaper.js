const folders = {
    wallpaper1: Array.from({ length: 2 }, (_, i) => `bgimage/wallpaper1/image${i + 1}.jpg`),
    wallpaper2: Array.from({ length: 2 }, (_, i) => `bgimage/wallpaper2/image${i + 1}.jpg`),
    wallpaper3: Array.from({ length: 2 }, (_, i) => `bgimage/wallpaper3/image${i + 1}.jpg`),
    wallpaper4: Array.from({ length: 2 }, (_, i) => `bgimage/wallpaper4/image${i + 1}.jpg`),
    wallpaper5: Array.from({ length: 4 }, (_, i) => `bgimage/wallpaper5/image${i + 1}.jpg`)
};

let currentFolder = 'wallpaper5';
const preloadedImages = {};

function preloadImages(folder) {
    if (!preloadedImages[folder]) {
        preloadedImages[folder] = folders[folder].map(src => {
            const img = new Image();
            img.src = src;
            return img;
        });
    }
}

function shuffleImages() {
    const images = folders[currentFolder];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.querySelector('.background-overlay').style.backgroundImage = `url('${images[randomIndex]}')`;
}

document.getElementById('folder-select').addEventListener('change', function() {
    currentFolder = this.value;
    preloadImages(currentFolder);
    shuffleImages();
});

setInterval(shuffleImages, 5000);
preloadImages(currentFolder); // Preload initial folder images
shuffleImages(); // Initial call to set the first image