


//Use the name attribute and a data-id attribute to retrieve any elements with an unique id.
// HTMLElemnets.dataset
let grid = document.getElementById("grid")
for(let i = 1; i < 101; ++i) {
    let box = document.createElement("div")
    box.setAttribute("name", "e")
    box.dataset.id = i

    grid.appendChild(box)
}