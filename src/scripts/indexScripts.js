window.addEventListener("DOMContentLoaded", (event) => {
  const dragList = document.getElementById("listToBeDragged");
  var startingPosition;
  var scrollDistance;
  var mouseDown = false;
  var draggingList = false;

  dragList.addEventListener("mousedown", (event) => {
    startingPosition = event.pageX;
    scrollDistance = slider.scrollLeft;
    mouseDown = true;
    draggingList = true;
  });

  dragList.addEventListener("mouseup", (event) => {
    mouseDown = false;
    draggingList = false;
  });

  dragList.addEventListener("mousemove", (event) => {
    const newPosition = event.pageX - dragList.offsetLeft;
    const moveList = newPosition - startingPosition;
    dragList.scrollLeft = scrollLeft - moveList;
  });
});
