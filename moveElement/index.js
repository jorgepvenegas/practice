const btn = document.getElementById("animate");
const square = document.getElementById("square");

const moveElement = (duration, distance, element) => {
  const start = performance.now();
  const move = timestamp => {

    const elapsedTime = timestamp - start;
    const progress = elapsedTime / duration; // will return the progress percentage
    const toMove = progress * distance; // multiply percentage by total distance

    element.style.transform = `translate(${toMove}px, ${toMove}px)`;

    if(toMove < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}

btn.addEventListener("click", () => {
  moveElement(1500, 200, square);
})