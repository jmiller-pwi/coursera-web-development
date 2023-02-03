const blueBox = document.querySelector('#blue-box');
const rightColumn = document.querySelector('#right-column');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

blueBox.addEventListener("mousedown", dragStart);
blueBox.addEventListener("mouseup", dragEnd);
blueBox.addEventListener("mouseout", dragEnd);
blueBox.addEventListener("mousemove", drag);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    blueBox.classList.add('dragged');

    isDragging = true;
}

function dragEnd(e) {
    if (isDragging) {
        isDragging = false;
        blueBox.classList.remove('dragged');

        const clonedBox = blueBox.cloneNode(true);
        clonedBox.style.left = currentX + "px";
        clonedBox.style.top = currentY + "px";
        clonedBox.removeAttribute("id");
        clonedBox.removeEventListener("mousedown", dragStart);
        clonedBox.removeEventListener("mouseup", dragEnd);
        clonedBox.removeEventListener("mouseout", dragEnd);
        clonedBox.removeEventListener("mousemove", drag);

        rightColumn.appendChild(clonedBox);
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        blueBox.style.left = currentX + "px";
        blueBox.style.top = currentY + "px";
    }
}
