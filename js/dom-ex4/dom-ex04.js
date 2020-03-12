//ex1
window.addEventListener("DOMContentLoaded", function() {
    var ex1 = document.querySelector("#ex1"),
        menuTrigger = ex1.querySelector(".menu-trigger"),
        nav = ex1.querySelector(".nav");
    menuTrigger.addEventListener("click", function() {
        this.classList.toggle("active-1");
        nav.classList.toggle("active");
        // if (this.classList.contains("active-1")) {
        //     nav.classList.add("active");
        // } else {
        //     nav.classList.remove("active");
        // }
    });
});
//ex2
window.addEventListener("DOMContentLoaded", function() {
    var ex2 = document.querySelector("#ex2"),
        tab = ex2.querySelector(".tab"),
        tabCon = ex2.querySelectorAll(".tab-con");

    // tab.addEventListener("click", function(e) {
    //     var target = e.target;
    //     var data = e.target.dataset.id; //사용자 속성
    //     //for문 돌면서 모든 클래스 지우기
    //     for (var i = 0; i < tabCon.length; i++) {
    //         tab.children[i].className = "";
    //         tabCon[i].className = "";
    //     }
    //     //원하는 타겟에만 클래스 넣기
    //     target.className = "active";
    //     tabCon[data].className = "active";
    // });
    var tabLi = ex2.querySelectorAll(".tab li");
    for (let i = 0; i < tabCon.length; i++) {
        tabLi[i].addEventListener("click", function() {
            this.className = "active";
            tabCon[i].className = "active";
        });
    }
});
