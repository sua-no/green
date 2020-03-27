window.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("header nav");
    const header = document.querySelector("header");
    const visual = document.querySelector(".visual");
    const windowHeight = window.innerHeight;
    const up = document.querySelectorAll(".up");
    let windowScroll;
    let upOffset;

    menu.addEventListener("click", navShow);
    window.addEventListener("scroll", headerFixed);
    //nav click
    function navShow() {
        this.classList.toggle("active");
        nav.classList.toggle("active");
        visual.classList.toggle("active");
    }
    //scroll - header fixed
    function headerFixed() {
        windowScroll = window.scrollY;
        if (windowHeight < windowScroll) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
        contentsUp();
    }
    //scroll - contents up
    function contentsUp() {
        windowScroll = window.scrollY;
        for (var i = 0; i < up.length; i++) {
            upOffset = up[i].offsetTop;
            if (upOffset - windowHeight < windowScroll) {
                up[i].style = "margin-top:0; opacity:1;";
            }
        }
    }
});