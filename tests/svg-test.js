SVGInject.setOptions({
    afterInject: (img, svg) => {
        svg.addEventListener("click", (e) => {
            e.target.classList.toggle("toggled")
        })
    }
})

SVGInject(document.querySelectorAll(".svg-inject"));