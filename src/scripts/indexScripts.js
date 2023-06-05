window.addEventListener("DOMContentLoaded", (event) => {
  //Get the list of "cards" and create variables to be used.
  const dragList = document.getElementById("listToBeDragged");
  var startingPosition;
  var scrollDistance;
  var mouseDown = false;
  var beenDragged = false;

  //When mouse is pressed down get starting position and how far has been scrolled, setting mouseDown to true.
  dragList.addEventListener("mousedown", (event) => {
    startingPosition = event.pageX;
    scrollDistance = dragList.scrollLeft;
    mouseDown = true;
  });

  //Change mouseDown state to false, and if the user has dragged the page stop the link of any "card" from being activated.
  dragList.addEventListener("mouseup", (event) => {
    mouseDown = false;
    if (beenDragged === true) {
      event.preventDefault();
    }
  });

  //When the mouse leaves the area change the mouseDown state to false.
  dragList.addEventListener("mouseleave", (event) => {
    mouseDown = false;
  });

  //On mouse move prevent default and if the mouse is still down then return otherwise update the position.
  dragList.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (mouseDown === false) {
      return;
    } else {
      beenDragged = true;
      const newPosition = event.pageX - dragList.offsetLeft;
      const moveList = (newPosition - startingPosition) * 1.5;
      dragList.scrollLeft = scrollDistance - moveList;
    }
  });

  //Allow users to scroll horizontally across the dragList.
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) dragList.scrollLeft += 100;
    else dragList.scrollLeft -= 100;
  });

  //Create 10 of the same "cards" inside of the dragList.
  for (let totalCards = 0; totalCards < 10; totalCards++) {
    dragList.insertAdjacentHTML(
      "beforeend",
      "<div class='flex flex-col flex-shrink-0 mr-5 group relative'  id='placeholder'>" +
        "<a href='https://github.com/OwenGitt/VentureStreamChallenge'>" +
        "<img class='w-[237px] h-[290px] sm:w-[396px] sm:h-[485px]  hover:scale-105 hover:cursor-pointer ease-in-out duration-500 relative' src='./images/Placeholder_Image.png'></img>" +
        " <div class='z-10 rounded-full absolute bg-white p-1 invisible group-hover:visible overflow-x-hidden bottom-24 right-12'>   " +
        "<svg  xmlns='http://www.w3.org/2000/svg' class='w-4 h-4' viewBox='0 0 10.293 9.794' >" +
        "<path id='Arrow' d='M4.865.53,9.232,4.9,4.865,9.263M9,4.9H0' transform='translate(0 0)' fill='none' stroke='#1f1f1e' stroke-width='1.5'  class='arrow' />" +
        "</svg>" +
        "</div>" +
        "<div class=' text-base mt-6 text-2xl'> Title</div>" +
        "</a>" +
        "</div>"
    );
  }
});
