window.addEventListener("DOMContentLoaded", function() {
    const slideAni = document.querySelector(".slide_ani");
    const banners = document.querySelectorAll(".s_bn");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const indi = document.querySelector(".indi");
    const indiBtn = document.querySelectorAll(".indi a");
    let idx = 0;
    let firstClone = banner[0].cloneNode(true);
    let lastClone = banner[banners.length - 1].cloneNode(true);

    bannerarr();
    slideAnimate();
    prev.addEventListener("click", bannerLeft);
    next.addEventListener("click", bannerRight);

    //li 정렬
    function bannerarr() {
        for (var i = 0; i < banners.length; i++) {
            banners[i].style.left = i * 100 + "%";
            //인디게이터
            indi.innerHTML += "<a></a>";
        }
    }
    //next
    function bannerRight() {
        slideAnimate(idx++);
    }
    //prev
    function bannerLeft() {
        slideAnimate(idx--);
    }
    //btn사라지기
    function slideAnimate(k) {
        // if (k) {
        //     idx++;
        // } else {
        //     idx--;
        // }
        //슬라이드 이동
        slideAni.style.left = idx * -100 + "%";
        update();
    }
    function update() {
        if (idx == 0) {
            prev.style.display = "none";
        } else if (idx == banners.length - 1) {
            next.style.display = "none";
        } else {
            prev.style.display = "block";
            next.style.display = "block";
        }
    }
    //인디게이터
});
