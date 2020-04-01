$(function () {
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        type: 'get',
        success: function (data) {
            var arti, full, thum, title, contents, popImg, popTxt, idx = 0;
            //xml 데이터 append
            $(data).find("item").each(function (i) {
                arti = '<article class="thumb"></article>';
                $('#main').append(arti);
                full = $(this).find("full").text();
                thum = $(this).find("thum").text();
                title = $(this).find("title").text();
                contentsAppend(i);
            });
            function contentsAppend(idx) {
                contents = "<a href='" + full + "' class='image'></a>";
                contents += "<img src='" + thum + "'></a>";
                contents += "<h2>" + title + "</h2>";
                $("article").eq(idx).append(contents);
            }

            //클릭 이벤트 - contents
            $("#main").on("click", "article", function (e) {
                e.preventDefault();
                $(".poptrox-overlay").fadeIn(200);
                idx = $(this).index();
                contentsChange();
            });
            $(".closer").on("click", function () {
                $(".poptrox-overlay").fadeOut(200);
            });
            $(".nav-previous").on("click", function () {
                if (idx > 0) {
                    idx--;
                }
                contentsChange();
            });
            $(".nav-next").on("click", function () {
                if (idx < $("article").length - 1) {
                    idx++;
                }
                contentsChange();
            });
            function contentsChange() {
                popImg = $("article").eq(idx).find("a").attr("href");
                popTxt = $("article").eq(idx).find("h2").text();
                $(".poptrox-popup .pic img").attr("src", popImg);
                $(".poptrox-popup .caption").text(popTxt);
            }

            //클릭 이벤트 - header
            $("header nav li a").on("click", function (e) {
                e.preventDefault();
                $("footer").toggleClass("active");
            });
        }
    });
});
