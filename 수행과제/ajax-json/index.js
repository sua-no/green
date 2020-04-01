window.addEventListener("DOMContentLoaded", function () {
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            const main = document.querySelector("#main"),
                popImg = document.querySelector(".pic img"),
                popTxt = document.querySelector(".caption h2"),
                popUpCon = document.querySelector(".poptrox-overlay"),
                closer = document.querySelector(".closer"),
                prevBtn = document.querySelector(".nav-previous"),
                nextBtn = document.querySelector(".nav-next"),
                info = document.querySelector("#header nav ul li a"),
                footer = document.querySelector("footer");
            let dataItem = data.item,
                contents, full, thum, title,
                imgNode, txtNode,
                idx = 0;

            //json append
            for (var i = 0; i < dataItem.length; i++) {
                let articleNode = document.createElement("article");
                articleNode.classList.add('thumb');
                contentAppend(i);
                document.querySelector("#main").appendChild(articleNode);
            }
            function contentAppend(idx) {
                full = dataItem[idx].full;
                thum = dataItem[idx].thum;
                title = dataItem[idx].title;
                contents = "<a href='" + full + "' class='image'></a>";
                contents += "<img src='" + thum + "'></a>";
                contents += "<h2>" + title + "</h2>";
                article[idx].innerHTML = contents;
            }
            //클릭 이벤트 - contents
            main.addEventListener("click", popUp);
            function popUp(e) {
                e.preventDefault();
                target = e.target;
                for (; target.nodeName != "ARTICLE"; target = target.parentNode);
                idx = index(target);
                popUpCon.style = "display : block;";
                imgChange();
            }
            function imgChange() {
                imgNode = article[idx].children[0].getAttribute("href");
                txtNode = article[idx].children[2].textContent;
                popImg.setAttribute("src", imgNode);
                popTxt.textContent = txtNode;
            }
            closer.addEventListener("click", function () {
                popUpCon.style = "display : none;";
            });
            prevBtn.addEventListener("click", function () {
                if (idx > 0) {
                    idx--;
                }
                imgChange();
            });
            nextBtn.addEventListener("click", function () {
                if (idx < article.length - 1) {
                    idx++;
                }
                imgChange();
            });

            //article의 인덱스
            function index(target) {
                let hole = 0;
                while ((target = target.previousSibling) != null) {
                    if (target.nodeType != 3) {
                        hole++;
                    }
                }
                return hole;
            }

            //클릭 이벤트 - header
            info.addEventListener("click", function (e) {
                e.preventDefault();
                footer.classList.toggle("active");
            });
        }
    });
});