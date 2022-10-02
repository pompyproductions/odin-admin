// SVG Injection

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


// ---
// Mobile tabs

function toggleTabElement(node) {
    for (let elem of document.querySelectorAll(".grid-tabs > li")) {
        elem.classList.remove("active")
    };
    node.classList.add("active");
}

function switchTabContainer(id) {
    for (let elem of document.querySelectorAll(".tab")) {
        elem.classList.add("hidden");
    }
    currentTab = tabs[id];
    currentTab.classList.remove("hidden");
}

function onTabClick(e) {
    if (tabs[e.target.getAttribute("data-tab")] !== currentTab) {
        toggleTabElement(e.target);
        switchTabContainer(e.target.getAttribute("data-tab"));
        console.log(e.target.getAttribute("data-tab"))
    }
}

const tabs = [
    document.querySelector(".card-container-projects"),
    document.querySelector(".card-container-announcements"),
    document.querySelector(".card-container-trending")
];
let currentTab = tabs[0];
tabs[0].classList.toggle("hidden");

for (let elem of document.querySelectorAll(".grid-tabs > li")) {
    elem.addEventListener("click", onTabClick)
};


// ---
// Hamburger

function onHamburgerClick(e) {
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".hamburger-menu").classList.toggle("hidden");
    document.querySelector("#hamburger").classList.toggle("active");
}

document.getElementById("hamburger").addEventListener("click", onHamburgerClick);
document.querySelector(".overlay").addEventListener("click", onHamburgerClick);
window.addEventListener("keydown", (e) => {
    if (e.key === "`") onHamburgerClick(e) ;
})
