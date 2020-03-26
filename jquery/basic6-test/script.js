window.addEventListener("DOMContentLoaded", function () {
    const html = document.querySelector("html");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const con = document.querySelectorAll(".con");
    const btn = header.querySelectorAll("a");
    let conOffset;
    let idx = 0;
    let windowScroll;

    header.addEventListener("click", scrollMove); //a클릭 이벤트
    window.addEventListener("scroll", btnChange); //스크롤 이벤트

    function scrollMove(e) {
        e.preventDefault(); //preventDefault
        target = e.target;
        for (; target.nodeName != "A"; target = target.childNodes);
        idx = target.dataset.id; //클릭한 a 의 index 변수 할당
        btn2(idx); //컨텐츠의 offsettop 변수 할당
        scrollAni(); // 해당위치로 스크롤 이동
        btnChange();
    }

    function scrollAni() {
        html.scrollTo({
            top: conOffset - headerHeight,
            behavior: 'smooth'
        });
    }

    function btnChange() {
        windowScroll = window.scrollY;
        for (let i = 0; i < con.length; i++) { // 반복문 실행
            btn2(i);
            if (conOffset - 200 < windowScroll) { //조건문 실행
                for (var j = 0; j < btn.length; j++) { //해당 컨텐츠에 클래스 추가. 나머지 제거 (흰색 불)
                    btn[j].classList.remove("active");
                }
                btn[i].classList.add("active");
            }
        }
    }

    function btn2(k) {
        conOffset = con[k].offsetTop;
        console.log((conOffset) + " ::: " + windowScroll);
    }
});