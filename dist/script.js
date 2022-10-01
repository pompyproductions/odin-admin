SVGInject.setOptions({
    afterInject: (img, svg) => {
        if (svg.id === "hamburger") {
            svg.addEventListener("click", onHamburgerClick);
        } else {
            svg.addEventListener("click", (e) => {
                e.target.classList.toggle("toggled");
            });
        };
    }
})

SVGInject(document.querySelectorAll(".svg-inject"));

for (let elem of document.querySelectorAll(".grid-tabs > li")) {
    elem.addEventListener("click", switchTab)
};

document.getElementById("hamburger").addEventListener("click", onHamburgerClick);
window.addEventListener("keydown", (e) => {
    if (e.key === "`") onHamburgerClick(e) ;
})

// event functions

function onHamburgerClick(e) {
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".hamburger-menu").classList.toggle("hidden");
    document.querySelector("#hamburger").classList.toggle("active");
}

function switchTab(e) {
    for (let elem of document.querySelectorAll(".grid-tabs > li")) {
        elem.classList.remove("active")
    };
    e.target.classList.add("active");
}