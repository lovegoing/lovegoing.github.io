

const images = [
    { src: 'Images/PHOTO_2.png', caption: 'Algorave @ Icklectic - London [2023]  →' },
    { src: 'Images/PHOTO_3.png', caption: 'Algorave @ Icklectic - London [2023  ]→' },
    { src: 'Images/PHOTO_4.png', caption: 'ICLC @ System - Shanghai [2024]  →' },
    { src: 'Images/PHOTO_5.png', caption: 'ICLC @ System - Shanghai [2024]  →' },
    { src: 'Images/PHOTO_6.png', caption: 'ICLC @ System - Shanghai [2024]  →' }
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const imageCaption = document.getElementById('image-caption');

// Update the image and caption based on the current index
function updateImage() {
    mainImage.src = images[currentIndex].src;
    imageCaption.textContent = images[currentIndex].caption;
}

// Add event listener for clicking on the image
mainImage.addEventListener('click', (event) => {
    const imageWidth = mainImage.clientWidth;
    const clickX = event.offsetX;

    if (clickX > imageWidth / 2) {
        // Right half: go to the next image
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        // Left half: go to the previous image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    updateImage();
});

// Initialize the image and caption on page load
updateImage();



let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas.height = Math.min(window.innerHeight / 2, 720);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

s0.initImage("doodleweb.png")

osc(2).diff(shape(200,.5,.6)).modulate(shape(90,.3,0.8).repeat(2,2)).add(shape(90,.2,0.8))
.diff(shape(90,.6,0.3)).add(shape(90,.3,0.9).rotate(1,.001).scale(1,2)).brightness(0).invert(1.2).invert(1).invert()
.add(o0,.0002)
.out(o0)


// Define an array of stars
const starsArray = ['✩', '｡', '･', ':*', '･ﾟ', '★', '､', '☆'];

// Get the maximum width of the viewport
const maxWidth = window.innerWidth;

document.addEventListener('mousemove', (event) => {
    // Define how far behind the cursor the trail should appear
    const offsetX = -20; // Horizontal offset
    const offsetY = -20; // Vertical offset

    const mouseX = event.clientX;
    const mouseY = event.clientY + window.scrollY; // Adjust for vertical scroll

    // Create a new trailing text element
    const trail = document.createElement('div');
    trail.className = 'trail';

    // Randomly select a star from the array
    const randomStar = starsArray[Math.floor(Math.random() * starsArray.length)];
    trail.innerText = randomStar; // Set the trailing text to the random star
    document.body.appendChild(trail);

    // Set the position of the trailing text slightly behind the mouse position
    trail.style.left = `${mouseX - offsetX}px`; // Adjust horizontal offset
    trail.style.top = `${mouseY - offsetY}px`; // Adjust vertical offset

    // Calculate the size of the star based on the mouse's X position
    const size = ((mouseX / maxWidth) * (300 - 5)) + 5; // Linear interpolation
    trail.style.fontSize = `${size}px`; // Set the size of the star

    // Fade out and remove the text after a short delay
    setTimeout(() => {
        trail.style.opacity = '0'; // Fade out
        setTimeout(() => {
            trail.remove(); // Remove the element from the DOM
        }, 500); // Match this time with the CSS transition duration
    }, 100); // Delay before fading out
});
