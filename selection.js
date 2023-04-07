let selecting = false;

window.addEventListener("click", e => {
    selecting = !selecting;
    if (selecting) {
         showSelectionDiv(new Point(e.pageX, e.pageY));   
    }
});

window.addEventListener("mousemove", e => {
    if (selecting) {
        update(new Point(e.pageX, e.pageY)); 
    }
});

let selectionDiv;

initializeDiv();


function showSelectionDiv(point) {
    selectionDiv.style.width = "0px";
    selectionDiv.style.height = "0px";
    selectionDiv.style.top = point.y + "px";
    selectionDiv.style.left = point.x + "px";
    selectionDiv.style.display = "block";
    selectionDiv.startPoint = point;
}

function update(point) {
    const p1 = selectionDiv.startPoint;
    const p2 = point;
  
    const sx = Math.min(p1.x, p2.x);
    const sy = Math.min(p1.y, p2.y);
    const ex = Math.max(p1.x, p2.x);
    const ey = Math.max(p1.y, p2.y);
  
    selectionDiv.style.left = sx + "px";
    selectionDiv.style.top = sy + "px";
    selectionDiv.style.width = Math.abs(sx-ex) + "px";
    selectionDiv.style.height = Math.abs(sy-ey) + "px";
}

function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

function initializeDiv() {
    selectionDiv = document.createElement("div");
    selectionDiv.style.display = "none";  
    selectionDiv.style.position = "absolute";
    selectionDiv.style.border = "1px solid black";
    document.body.append(selectionDiv);
}