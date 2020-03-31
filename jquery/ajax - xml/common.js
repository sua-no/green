$(function () {
    $.ajax({
        url: "data.xml",
        type: "GET", //POST
        dataType: "xml",
        success: function (data) {
            // console.log(data.portfolio[0].work1[0].thum);
            var thum, name, time, workMain, workList = '';
            $(data).find("work").each(function (i) {
                thum = $(this).find("thum").text();
                name = $(this).find("name").text();
                time = $(this).find('time').text();

                if (!$("section").hasClass("work")) {
                    funMain(i);
                } else {
                    funSub(i);
                }
            });

            function funMain(idx) {
                workMain = "<figure><a href='sub.html#" + idx + "'><img src=" + thum + "><figcaption>" + name + "</figcaption></a></figure>";
                $('section').append(workMain);
            }

            function funSub() {
                workList = "<li>";
                workList += "<figure>";
                workList += "<img src=" + thum + ">";
                workList += "<figcaption>";
                workList += "<span>" + name + "</span>";
                workList += "<span>" + time + "</span>";
                workList += "</figcaption>";
                workList += "</figure>";
                workList += "</li>";

                $('section ul').append(workList);
            }
            var url = location.hash.substr(1); //url.substr(0); // substr특정 위치 이후 문자를 찾아라
            //console.log(url.substr(1)); //split, substring, substr
            //console.log(url);
            $('section ul li').on('click', function () {
                var idx = $(this).index();

                detail(idx);
            });
            function detail(fidx) {
                var detail = $(data).find("work").eq(fidx).find("detail").text();
                var nameDetail = $(data).find("work").eq(fidx).find("name").text();
                var timeDetail = $(data).find("work").eq(fidx).find("time").text();
                var linkDetail = $(data).find("work").eq(fidx).find("link").text();

                $("article img").attr("src", detail);
                $("article figcaption span").eq(0).text(nameDetail);
                $("article figcaption span").eq(1).text(timeDetail);
                $("article figcaption a").attr("href", linkDetail);
            }
            var url = location.hash.substr(1);
            $('section ul li').eq(url).addClass('active');
            detail(url);

            $('section ul li').on('click', function () {
                var idx = $(this).index();
                detail(idx);
            });

        }

    });

});