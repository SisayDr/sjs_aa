var slides = document.querySelectorAll(".slide-container");
var active_slide = 0;
function open_slide(index) {
  [...slides].forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}
open_slide(active_slide);

setInterval(() => {
  if (++active_slide >= slides.length) active_slide = 0; //reset if end is reached
  open_slide(active_slide);
}, 7000);

function enlarge_image(img) {
  let img_src = img.getAttribute("src");
  let modal_div = document.querySelector("#image-modal-container");
  let modal_img = modal_div.querySelector("img");
  modal_img.setAttribute("src", img_src);
  modal_div.style.display = "flex";
}
