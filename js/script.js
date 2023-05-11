const collapsibles = document.querySelectorAll(".collapse");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapse--expanded");
    })
);
