window.addEventListener("DOMContentLoaded", (event) => {
  const dragList = document.getElementById("listToBeDragged");
  var startingPosition;
  var scrollDistance;
  var mouseDown = false;
  var beenDragged = false;

  dragList.addEventListener("mousedown", (event) => {
    startingPosition = event.pageX;
    scrollDistance = dragList.scrollLeft;
    mouseDown = true;
  });

  dragList.addEventListener("mouseup", (event) => {
    mouseDown = false;
    if (beenDragged === true) {
      event.preventDefault();
    }
  });

  dragList.addEventListener("mouseleave", (event) => {
    mouseDown = false;
  });

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

  //
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) dragList.scrollLeft += 100;
    else dragList.scrollLeft -= 100;
  });

  for (let totalCards = 0; totalCards < 10; totalCards++) {
    dragList.insertAdjacentHTML(
      "beforeend",
      "<div class='flex flex-col flex-shrink-0 mr-5 group relative' id='placeholder'>" +
        "<a href='https://github.com/OwenGitt/VentureStreamChallenge'>" +
        "<img class='w-auto h-auto hover:scale-105 hover:cursor-pointer ease-in-out duration-500 relative' src='./images/Placeholder_Image.png'></img>" +
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
