window.addEventListener("mousedown", e => createFloatingDiv(e.clientX, e.clientY))
window.addEventListener("mouseup", e => console.log("up"))

function createFloatingDiv(x = 0, y = 0) {
  console.log(x, y);
  let fdiv = document.createElement("div");
  fdiv.style.position = "absolute";
  fdiv.style.top = y + "px";
  fdiv.style.left = x + "px";
  fdiv.style.width = "50px";
  fdiv.style.height = "50px";
  fdiv.style.backgroundColor = "red";
  document.body.append(fdiv);
}
