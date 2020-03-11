//ex1
window.addEventListener("DOMContentLoaded", function() {
    const ex1 = document.querySelector("#ex1");
    let txtInput = ex1.querySelectorAll(".txt-input");
    let addBtn = ex1.querySelector(".add-button");
    let resultBtn = ex1.querySelector(".result-button");
    let delBtn = ex1.querySelector(".del-button");
    let menuList = ex1.querySelectorAll(".menu-list li");
    let name = [];
    let kor = [];
    let eng = [];
    let obj = { name, kor, eng };
    let sum = [];
    addBtn.addEventListener("click", function() {
        name.push(txtInput[0].value);
        kor.push(txtInput[1].value);
        eng.push(txtInput[2].value);
        sum.push(parseInt(txtInput[1].value) + parseInt(txtInput[2].value));
        for (var i = 0; i < name.length; i++) {
            menuList[0].textContent += " " + name[i];
            menuList[1].textContent += " " + kor[i];
            menuList[2].textContent += " " + eng[i];
        }
    });
    resultBtn.addEventListener("click", function() {
        for (var i = 0; i < name.length; i++) {
            menuList[3].textContent += " " + sum[i];
            menuList[4].textContent += " " + sum[i] / 2;
        }
    });
    delBtn.addEventListener("click", function() {
        txtInput[0].value = null;
        txtInput[1].value = null;
        txtInput[2].value = null;
    });
});
//ex2
window.addEventListener("DOMContentLoaded", function() {
    const ex2 = document.querySelector(".ex2");
    let div = ex2.querySelector("div");
    div.className = "red";
});
//ex3
window.addEventListener("DOMContentLoaded", function() {
    const ex3 = document.querySelector(".ex3");
    let div = ex3.querySelector("div");
    div.classList.add("active");
});
//ex4
window.addEventListener("DOMContentLoaded", function() {
    const ex4 = document.querySelector(".ex4");
    let toggleClass = ex4.querySelector(".toggle");
    ex4.addEventListener("click", function() {
        toggleClass.classList.toggle("on");
        toggleClass.textContent = toggleClass.className;
        console.log(toggleClass.classList.contains("on"));
    });
});
//ex5
window.addEventListener("DOMContentLoaded", function() {
    const ex5 = document.querySelector(".ex5");
    let li = ex5.querySelectorAll("li");
    let div = ex5.querySelectorAll("li div");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function() {
            // console.log(this.nodeName);
            //let div = this.querySelector("div");
            //div.classList.toggle("on");

            //참고!!!!!!!!!!!!!!지우면서 추가!!!!!!!!
            for (var i = 0; i < div.length; i++) {
                div[i].classList.remove("on");
            }
            var liDiv = this.querySelector("div");
            liDiv.classList.toggle("on");
        });
    }
});
