const elToggleBtn = document.querySelector('.js-toggle-btn');

const elNav = document.querySelector('.js-nav');

const elToggleImg = document.querySelector('.js-toggle-img');


elToggleBtn.addEventListener('click', (evt) => {
   elNav.classList.toggle("move-nav");
   elToggleImg.classList.toggle('change-toggle-img');
   let old_src = elToggleImg.src;
   if(!old_src.endsWith("images/close.svg")) {
   elToggleImg.src = "images/close.svg";
   }else {
      elToggleImg.src = "./images/toggle_img.svg";
   }
});

