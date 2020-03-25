window.addEventListener("DOMContentLoaded", function(){
        const windowHeight = window.innerHeight;//브라우저 높이 변수 선언
        const div = document.querySelectorAll(".content div");
        let scrollTop;     //현재스크롤 위치 변수 선언
        //console.log(windowHeight); //625

    window.addEventListener("scroll",contentsUp); //윈도우 스크롤 이벤트 
    function contentsUp(){
        scrollTop= window.scrollY;     // 현재 스크롤 위치 변수에 할당
        //console.log("scroll top : "+scrollTop);
        for(var i = 0; i < div.length; i++){    // 각 div의 offsettop 변수에 할당하는 함수
            let divOffset = div[i].offsetTop;     //offsettop 변수 선언
            console.log(divOffset);
            if(divOffset - windowHeight < scrollTop){ //조건문 실행
                div[i].style = "margin:100px; opacity:1;" //각 div css margin 100, opacity 1
            }
        }
    }
    //window.dispatchEvent(e);      //window 에 trigger : 이벤트 강제 실행. vanila : dispatchEvent()
    //조건문 실행 (offsettop - windowheight < 현재 스크롤 위치) con - windowHeight = 브라우저아래 컨텐츠 걸리는 스크롤
    
});