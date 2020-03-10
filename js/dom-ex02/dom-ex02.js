//ex4
//window.addEventListener("DOMContentLoaded", function() {});
//ex3
//window.addEventListener("DOMContentLoaded", function() {});

//ex2
window.addEventListener("DOMContentLoaded", function() {
    var ex2 = document.querySelector(".ex2");
    var txtInput = ex2.querySelector(".txt-input");
    var btnInput = ex2.querySelector(".btn-input");
    var txtList = ex2.querySelector(".txt-list");
    var delInput = ex2.querySelector(".del-input");
    var target = null;

    btnInput.addEventListener("click", function() {
        txtList.innerHTML += "<p>" + txtInput.value + "</p>";
        //var txtNode = document.createTextNode(txtInput.value); // cf) createElement("span") : 태그 생성
        //txtList.append(txtNode); //apend : 생성된 txtNode 개별 추가, appendChild도 있음. 이후 수정해야할 때 용이
    });
    txtList.addEventListener("click", function(e) {
        //이벤트 정보가 담겨있는 parameter e, e적지않고 event.target으로 명시 가능
        target = e.target;
        target.style.border = "2px solid red";
    });
    delInput.addEventListener("click", function() {
        target.remove();
    });
});
//ex1
window.addEventListener("DOMContentLoaded", function() {
    //load와의 차이 : 'load'는 이미지나 동영상 까지 모두 로드완료 된 후 함수 실행
    var ex1 = document.querySelector(".ex1 .txt");
    ex1.textContent = "안녕하세요";
    ex1.style.color = "orange";
    ex1.style.fontSize = "2em";
});
