window.addEventListener("DOMContentLoaded", function () {
    const windowHeight = window.innerHeight;
    const div = document.querySelectorAll("div");
    let scrollTop;
    let divOffset;
    window.addEventListener("scroll", contentsUp);

    function contentsUp() {
        scrollTop = window.scrollY;
        for (var i = 0; i < div.length; i++) {
            divOffset = div[i].offsetTop;
            if (divOffset - windowHeight < scrollTop) {
                div[i].style = "margin:100px; opacity:1";
            }
        }
    }
    window.dispatchEvent(new CustomEvent('scroll'));
});