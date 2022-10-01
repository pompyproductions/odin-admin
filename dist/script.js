SVGInject.setOptions({
    afterInject: (img, svg) => {
        svg.addEventListener("click", (e) => {
            e.target.classList.toggle("toggled")
        })
    }
})

SVGInject(document.querySelectorAll(".svg-inject"));

for (let elem of document.querySelectorAll(".grid-tabs > p")) {
    elem.addEventListener("click", switchTab)
}


// event functions

function switchTab(e) {
    for (let elem of document.querySelectorAll(".grid-tabs > p")) {
        elem.classList.remove("active")
    };
    e.target.classList.add("active");
}