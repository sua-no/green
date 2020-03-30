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

                //funMain();

                workList += "<li>";
                workList += "<figure>";
                workList += "<img src=" + thum + ">";
                workList += "<figcaption>";
                workList += "<span>" + name + "</span>";
                workList += "<span>" + time + "</span>";
                workList += "</figcaption>";
                workList += "</figure>";
                workList += "</li>";
            });
            $("section ul").append(workList);

            console.log(workList);

            function funMain() {
                workMain = "<figure><img src=" + thum + "><figcaption>" + name + "</figcaption></figure>"
                $("section").append(workMain);
            }
            console.log(workMain);
        }

    });

});