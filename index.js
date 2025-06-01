// const trailer = document.getElementById("trailer");

// const animateTrailer = (e, interacting) => {
//   const x = e.clientX - trailer.offsetWidth / 2,
//     y = e.clientY - trailer.offsetHeight / 2;

//   const keyframes = {
//     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
//   };

//   trailer.animate(keyframes, {
//     duration: 200,
//     fill: "forwards",
//   });
// };

// window.onmousemove = (e) => {
//   const interactable = e.target.closest(".interactable"),
//     interacting = interactable !== null;

//     animateTrailer(e, interacting);

//     if(interacting){
//         icon.className = getTrailerClass(interactable.dataset.type);
//     }
// };


// Cursor trailer script

let cursorPosition = { x: 0, y: 0 };
let isCursorMoving = false;
let cursorMoveTimemout;
let circles = [];
let circleRemovalInterval;

const cursor = document.getElementById("main");

document.addEventListener("mousemove", (e) => {
  cursorPosition.x = e.clientX;
  cursorPosition.y = e.clientY;
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";

  isCursorMoving = true;

  clearTimeout(cursorMoveTimemout);

  cursorMoveTimemout = setTimeout(() => {
    isCursorMoving = false;
    setTimeout(() => {
      clearInterval(circleRemovalInterval);
      circleRemovalInterval = setInterval(() => {
        if (circles.length > 0) {
          let circle = circles.shift();
          circle.remove();
        } else {
          clearInterval(circleRemovalInterval);
        }
      }, 15);
    }, 10);
  }, 10);
});

setInterval(() => {
    if(isCursorMoving) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        document.body.appendChild(circle);

        circle.style.left = cursorPosition.x - circle.
        offsetWidth / 2 + "px";
        circle.style.top = cursorPosition.y - circle.
        offsetHeight / 2 + "px";

        circles.push(circle);
    }
}, 10)


// End Cursor trailer Script