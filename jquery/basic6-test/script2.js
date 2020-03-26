window.addEventListener("DOMContentLoaded", function () {
    const html = document.querySelector("html");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const btn = header.querySelectorAll("a");
    const con = document.querySelectorAll(".con");
    let idx;
    let prev;

    let conOffsetTop;
    let windowScroll;

    header.addEventListener("click", scrollMove);

    function scrollMove(e) {
        e.preventDefault();
        target = e.target;
        for (; target.nodeName != "A"; target = target.childNodes);
        idx = target.dataset.id;
        console.log(idx);

        conOffsetTop = con[idx].offsetTop;
        scrollAni();
        prev = idx;
        console.log(prev);
        btn[prev].classList.remove("active");
        target.classList.add("active");

    }

    function scrollAni() {
        windowScroll = conOffsetTop - headerHeight;
        html.scrollTo({
            top: windowScroll,
            behavior: "smooth"
        });


    }

});