console.log("Script started");

function start() {
    console.log("click");
    console.log(Math.random() * 100);
    createCircle();
}

function createCircle() {
    // Create a div for the circle
    let circle = document.createElement("div");

    // Set some text and styles
    circle.innerText = "6767";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.backgroundColor = "navy";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "25px";
    // Position the circle randomly using absolute positioning
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    // Add to the page
    document.body.appendChild(circle);
}

function getRandomX() {
    let randX = Math.random() * window.innerWidth - 100;
    return randX;
}

function getRandomY() {
    let randY = Math.random() * window.innerHeight - 100;
    return randY;
}