const slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter++;
  slideImage();
};

const goPrev = () => {
  counter--;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// i want ki jb slides khtm ho jaaye tb..y to phir s starting s aa jaye slides y phir uske baad next disabled ho jaaye...to kya kre?

// const goNext1 = () => {
// if (counter < slides.length - 1) {
// counter++;
// slideImage();
// }
// };
// const goPrev1 = () => {
// if (counter != 0) {
// counter--;
// slideImage();
// }
// };
