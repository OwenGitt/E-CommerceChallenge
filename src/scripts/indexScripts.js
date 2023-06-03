window.addEventListener("DOMContentLoaded", (event) => {
  const dragList = document.getElementById("listToBeDragged");
  var startingPosition;
  var scrollDistance;
  var mouseDown = false;
  var draggingList = false;

  dragList.addEventListener("mousedown", (event) => {
    startingPosition = event.pageX;
    scrollDistance = dragList.scrollLeft;
    mouseDown = true;
    draggingList = true;
  });

  dragList.addEventListener("mouseup", (event) => {
    mouseDown = false;
    draggingList = false;
  });

  dragList.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (!mouseDown) {
      return;
    }
    const newPosition = event.pageX - dragList.offsetLeft;
    const moveList = newPosition - startingPosition;
    dragList.scrollLeft = scrollDistance - moveList;
  });
});
