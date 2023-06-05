window.addEventListener("DOMContentLoaded", (event) => {
  const dragList = document.getElementById("listToBeDragged");
  var startingPosition;
  var scrollDistance;
  var mouseDown = false;

  dragList.addEventListener("mousedown", (event) => {
    startingPosition = event.pageX;
    scrollDistance = dragList.scrollLeft;
    mouseDown = true;
  });

  dragList.addEventListener("mouseup", (event) => {
    mouseDown = false;
  });

  dragList.addEventListener("mouseleave", (event) => {
    mouseDown = false;
  });

  dragList.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (!mouseDown) {
      return;
    }
    const newPosition = event.pageX - dragList.offsetLeft;
    const moveList = (newPosition - startingPosition) * 1.5;
    dragList.scrollLeft = scrollDistance - moveList;
  });

  //
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) dragList.scrollLeft += 100;
    else dragList.scrollLeft -= 100;
  });
});
