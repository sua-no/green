window.addEventListener("DOMContentLoaded", function() {
    var ex1 = document.querySelector("#ex1");
    var detail = document.querySelector(".popup");
    var detailImg = document.querySelector(".popup img");
    var thum = ex1.querySelector(".thum");
    thum.addEventListener("click", function(e) {
        var tar = e.target.src;
        for (var i = 0; i < thum.children.length; i++) {
            thum.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
        detail.style.display = "flex";
        detailImg.src = tar;
    });
    detailImg.addEventListener("click", function() {
        detail.style.display = "none";
    });
});
