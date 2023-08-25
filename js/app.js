
// Toggle btn 

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

// ends toggle btn


//  Create a plan part

// Choice btn element

let path = window.location.pathname.split('/');

let currentPath = path[path.length - 1];

if(currentPath === 'plan.html' || currentPath === 'plan') {
   


const elChoiceBtn = document.querySelector('.js-choice-btn');


// Li item elements 

const elPreferencesItem = document.querySelector('.js-preferences-item');
const elBeanTypeItem = document.querySelector('.js-beantype-item');
const elQuantityItem = document.querySelector('.js-quantity-item');
const elGrindItem = document.querySelector('.js-grind-item');
const elDeliveriesItem = document.querySelector('.js-deliveries-item');

// Details elements 

const elPreferences = document.querySelector('.js-preferences');
const elBeanType = document.querySelector('.js-beantype');
const elQuantity = document.querySelector('.js-quantity');
const elGrind = document.querySelector('.js-grind');
const elDeliveries = document.querySelector('.js-deliveries');


// Strong empty place elements

const elUserChoicePlaces = document.querySelectorAll('.choice__summary-user-choice');
const elPreferencesPlace = document.querySelector('.js-preferences-place');
const elBeanTypePlace = document.querySelector('.js-beantype-place');
const elQuantityPlace = document.querySelector('.js-quantity-place');
const elGrindPlace = document.querySelector('.js-grind-place');
const elDeliveriesPlace = document.querySelector('.js-deliveries-place');


// Listen Toggle event of details tags

listenToggle(elPreferences, elPreferencesItem);
listenToggle(elBeanType, elBeanTypeItem);
listenToggle(elQuantity, elQuantityItem);
listenToggle(elGrind, elGrindItem);
listenToggle(elDeliveries, elDeliveriesItem);

function listenToggle(el, elItem) { 
   el.addEventListener('toggle', (evt) => {
      elItem.classList.toggle('choice__item-active');
      if(!elItem.classList.contains('choice__item-active')) {
         elItem.classList.add('choice__item--inactive');
      }else {
          elItem.classList.remove('choice__item--inactive');
      }
   });
}


// Listen input checked condition 

listenInputChecked(elPreferences, elPreferencesItem, elPreferencesPlace);
listenInputChecked(elBeanType, elBeanTypeItem, elBeanTypePlace);
listenInputChecked(elQuantity, elQuantityItem, elQuantityPlace);
listenInputChecked(elGrind, elGrindItem, elGrindPlace);
listenInputChecked(elDeliveries, elDeliveriesItem, elDeliveriesPlace);

function listenInputChecked(el, elItem, elPlace) {
   let flag = true;
   el.addEventListener('click', (evt) => { 
   if(evt.target.matches('.choice__input') || evt.target.matches('.choice__label')) {
      elItem.classList.add('choice_item-active-selected');
      elPlace.innerHTML = evt.target.value || '____';
      for (item of elUserChoicePlaces) {
          if(item.innerHTML === '____') {
            flag = false;
            break;
          }else {
            flag = true;
          }
      }

      if(flag) {
         elChoiceBtn.classList.add('choice__btn--active');
         elChoiceBtn.removeAttribute('disabled'); 
      }else {
         elChoiceBtn.classList.remove('choice__btn--active');
         elChoiceBtn.setAttribute('disabled', '');
      }

   }else {
       if(elItem.classList.contains('choice_item-active-selected')) {
          if(!evt.target.matches('.choice__action-summary')) {
             elItem.classList.remove('choice_item-active-selected');
          }
       }
   }
});
}



// Order summary part

const modal = document.querySelector('.js-modal');
const overlay = document.querySelector('.js-overlay');
const elModalDesc = document.querySelector('.js-modal-desc');
const elCheckOutBtn = document.querySelector('.js-checkout-btn');
const elCheckOutBtnMobile = document.querySelector('.js-modal-btn-mobile');
const elSummaryDesc = document.querySelector('.js-ummary-desc');

elChoiceBtn.addEventListener('click', (evt) => {

   let val = elChoiceBtn.classList.contains('choice__btn--active');

   if(val) {
      overlay.style.display ='block'; 
      modal.classList.add('modal-appear');
      elModalDesc.innerHTML = elSummaryDesc.innerHTML; 
   }else {
      overlay.style.display ='none'; 
      modal.classList.remove('modal-appear');
   }

});


overlay.addEventListener('click', (evt) => {
      overlay.style.display ='none'; 
      modal.classList.remove('modal-appear');
});

elCheckOutBtn.addEventListener('click', (evt) => {
      overlay.style.display ='none'; 
      modal.classList.remove('modal-appear');
});

elCheckOutBtnMobile.addEventListener('click', (evt) => {
      overlay.style.display ='none'; 
      modal.classList.remove('modal-appear');
});

}





