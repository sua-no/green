window.addEventListener("DOMContentLoaded", function () {
    const figure = document.querySelectorAll(".gallery li figure");
    const galleryImg = document.querySelectorAll(".gallery p");
    const pop = document.querySelector(".ly-pop");
    const popImg = document.querySelector(".ly-pop p img");
    const popTxt = document.querySelector(".ly-pop figcaption");
    const prevBtn = document.querySelector(".ly-pop .prev");
    const nextBtn = document.querySelector(".ly-pop .next");
    const closeBtn = document.querySelector(".ly-pop .close");
    let figImg;
    let figcaption;
    let idx = 0;

    btnHide();
    for (var i = 0; i < galleryImg.length; i++) {
        galleryImg[i].addEventListener("click", function () {
            figImg = this.childNodes[0].getAttribute("src");
            figcaption = this.nextSibling.nextSibling.textContent;
            idx = this.dataset.id;
            classToggle();
            clickImg();
            btnHide();
        });
    }

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        idx++;
        imgChange();
        clickImg();
        btnHide();
    });
    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        idx--;
        imgChange();
        clickImg();
        btnHide();
    });

    function classToggle() {
        pop.classList.remove("disable");
        closeBtn.addEventListener("click", function () {
            pop.classList.add("disable");
        });
    }

    function imgChange() {
        figImg = figure[idx].childNodes[1].childNodes[0].getAttribute("src");
        figcaption = figure[idx].childNodes[3].textContent;
    }

    function clickImg() {
        popImg.setAttribute("src", figImg);
        popTxt.textContent = figcaption;
    }

    function btnHide() {
        if (idx == 0) {
            prevBtn.style.display = "none";
        } else if (idx == figure.length - 1) {
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "inline-block";
            nextBtn.style.display = "inline-block";
        }
    }
});