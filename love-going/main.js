

const images = [
    { src: 'Images/PHOTO_2.png', caption: 'Algorave @ Icklectic - London [2023]' },
    { src: 'Images/PHOTO_3.png', caption: 'Algorave @ Icklectic - London [2023]' },
    { src: 'Images/PHOTO_4.png', caption: 'ICLC @ System - Shanghai [2024]' },
    { src: 'Images/PHOTO_5.png', caption: 'ICLC @ System - Shanghai [2024]' },
    { src: 'Images/PHOTO_6.png', caption: 'ICLC @ System - Shanghai [2024]' }
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const imageCaption = document.getElementById('image-caption');

mainImage.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    mainImage.src = images[currentIndex].src;
    imageCaption.textContent = images[currentIndex].caption; // Update caption
});

// Initialize the image caption
imageCaption.textContent = images[currentIndex].caption;


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


