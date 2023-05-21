let imgcars = document.querySelectorAll(".imgcars");

let xboximg = document.getElementById("xbox-img");

imgcars.forEach((ee) => {
  ee.addEventListener("click", function () {
    xboximg.src = ee.src;
  });
});

// // .........................
// input date
let dat = document.querySelectorAll(".date");
const now = new Date();
const year = now.getFullYear();
const month =
  now.getMonth().toString().length === 1
    ? `0${(now.getMonth() + 1).toString()}`
    : now.getMonth() + 1;
const date =
  now.getDate().toString().length === 1
    ? `0${now.getDate().toString()}`
    : now.getDate();
const formattedDate = `${year}-${month}-${date}`;
dat[0].value = formattedDate
dat[1].value = formattedDate

// // .........................
// input time
let time = document.querySelectorAll(".time");
const hours =
  now.getHours().toString().length === 1
    ? `0${now.getHours().toString()}`
    : now.getHours();
const minutes =
  now.getMinutes().toString().length === 1
    ? `0${now.getMinutes().toString()}`
    : now.getMinutes();
const formattTime = `${hours}:${minutes}`;
time[0].value = formattTime
time[1].value = formattTime


// ..............................

const listItems = document.querySelectorAll('.fadeIn');
const productBoxes = document.querySelectorAll('.product-box');

listItems.forEach(function(listItem, index) {
  listItem.setAttribute('style', `animation-delay: ${index * .2}s`);
});

productBoxes.forEach(function(productBox, index) {
  productBox.setAttribute('style', `animation-delay: ${index * .1}s`);
});

document.querySelector('.action-button').addEventListener('click', function () {
    document.querySelector('.app-right').classList.add('isOpen');
  document.querySelector('.app-left').classList.add('hide');
});

document.querySelector('.app-right-hide').addEventListener('click', function () {
    document.querySelector('.app-right').classList.remove('isOpen');
  document.querySelector('.app-left').classList.remove('hide');
});




//DOM STRINGS OBJECT
const DOM = {
  timelineDate: document.querySelectorAll('.timeline__date'),
  timelineElem: document.querySelectorAll('.timeline__elem'),
  timelineBar: document.querySelector('.timeline__bar') };


//TIMELINE ELEM SET DIRECTION TO EVENT ITEMS (left or right oriented)

//getting direction from .timeline-elem
const __getDir = timelineElem => {

  if (timelineElem.classList.contains('timeline__elem--left')) {
    return 'left';
  } else if (timelineElem.classList.contains('timeline__elem--right')) {
    return 'right';
  }

};

const setDirEvent = () => {

  DOM.timelineElem.forEach(elem => {

    const direction = __getDir(elem);

    const timelineEvent = elem.querySelector('.timeline__event');

    timelineEvent.classList.add(`timeline__event--${direction}`);

  });

};

//TIMELINE ELEM DATE STYLES (background)
const __getBGImage = () => {

  const compStyle = getComputedStyle(DOM.timelineBar);

  return compStyle.backgroundImage;

};

const __getBGSize_height = () => {

  const timebarHeight = DOM.timelineBar.offsetHeight;

  return timebarHeight;

};

const __getBGPos_y = dateElem => {

  const timelinebarBox = DOM.timelineBar.getBoundingClientRect();

  const dateBox = dateElem.getBoundingClientRect();

  const pos_y = dateBox.top - timelinebarBox.top;

  return pos_y;

};

const setDateBG = () => {

  const bgImg = __getBGImage();

  const bgHeight = __getBGSize_height();

  DOM.timelineDate.forEach(elem => {

    //setting bgImage
    elem.style.backgroundImage = bgImg;

    //setting bgSize
    elem.style.backgroundSize = `100% ${bgHeight}px`;

    //setting bgPosition
    const dateOffset = __getBGPos_y(elem);

    elem.style.backgroundPosition = `0 -${dateOffset}px`;

  });

};

//ONLOAD FUNCTION
window.addEventListener('load', () => {

  //setting direction class to the timeline event block
  setDirEvent();

  //set date background styles
  setDateBG();

});