function resetBox() {
    let boxContainer = document.querySelector(".boxContainer");
    let rowContainers = document.querySelectorAll(".rowContainer");
    rowContainers.forEach(row => boxContainer.removeChild(row));

}

// function hovered(e) {
    // e.target.classList.add("hovered");
// }

// function left(e) {
// e.target.classList.remove
// }

function createEtch(num) {
    let boxContainer = document.querySelector(".boxContainer");


    for (let i = 0; i < num; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        for (let count = 0; count < num; count++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseenter", function hovered(e) {
                e.target.classList.add("hovered");
                console.log(e.target);
                e.target.style["background"] = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
            }, {once: true});
            // box.addEventListener("mouseleave", function left(e) {
            //     e.target.classList.remove("hovered");
            // });
            rowContainer.appendChild(box);
        }
        boxContainer.appendChild(rowContainer);
    }
}

function getNum() {
    let sides = document.getElementById("numOfSidesInput").value;
    Number.parseInt(sides);
    
    if (sides > 100) {
        return 100;
    }
    if (sides < 0 || isNaN(sides)) {
        return 0;
    }
    document.getElementById("numOfSidesInput").value = ""; // reset input
    return sides;
}

function active(e) {
    let sides = getNum();
    resetBox();
    createEtch(sides);
}

function randomValue() {
    // Returns a random value between 0 and 255
    // Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * 256);
}

let button = document.getElementById("numOfSidesButton");
button.addEventListener("click", active);

