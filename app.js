const rightButton = document.querySelector(".right-btn");
const leftButton = document.querySelector(".left-btn");

const carousel = document.querySelector(".images");
const images = document.querySelectorAll(".images img");

let counter = 1;

images.forEach((image) => {
  image.style.transform = "translate(" + -295 * counter + "px)";
});

rightButton.addEventListener("click", () => {
  if (counter >= 7) {
    return;
  }
  counter++;
  images.forEach((image) => {
    image.style.transition = "transform 0.8s ease-in-out";
    image.style.transform = "translate(" + -295 * counter + "px)";
  });
});

leftButton.addEventListener("click", () => {
  if (counter < 0) {
    return;
  }
  counter--;
  images.forEach((image) => {
    image.style.transition = "transform 0.8s ease-in-out";
    image.style.transform = "translate(" + -295 * counter + "px)";
  });
});

images[counter].addEventListener("transitionend", () => {
  if (images[counter].id == "last-clone") {
    images.forEach((image) => {
      image.style.transition = "none";
    });
    counter = 6;
    images.forEach((image) => {
      image.style.transform = "translate(" + -295 * counter + "px)";
    });
  }
  if (images[counter].id == "first-clone") {
    images.forEach((image) => {
      image.style.transition = "none";
    });
    counter = 1;
    images.forEach((image) => {
      image.style.transform = "translate(" + -295 * counter + "px)";
    });
  }
});
