function resetBox() {
    let boxContainer = document.querySelector(".boxContainer");
    let rowContainers = document.querySelectorAll(".rowContainer");
    rowContainers.forEach(row => boxContainer.removeChild(row));

}

function createEtch(num) {
    let boxContainer = document.querySelector(".boxContainer");


    for (let i = 0; i < num; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        for (let count = 0; count < num; count++) {
            let box = document.createElement("div");
            box.classList.add("box");
            rowContainer.appendChild(box);
        }
        boxContainer.appendChild(rowContainer);
    }
}

function getNum() {
    let sides = document.getElementById("numOfSidesInput").value;
    document.getElementById("numOfSidesInput").value = ""; // reset input
    Number.parseInt(sides);
    if (sides < 0 || isNaN(sides)) {
        return 0;
    }
    return sides;
}

function active(e) {
    let sides = getNum();
    resetBox();
    createEtch(sides);
}

let button = document.getElementById("numOfSidesButton");
button.addEventListener("click", active);