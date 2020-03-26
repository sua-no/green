$(function () {
    $("header").load("header.html nav");
    $("footer").load("header.html .foot");
    $("section").load("main.html");
    $("body").addClass("active");

    setTimeout(function () {
        $("header nav a").on("click", function (e) {
            e.preventDefault();
            var link = $(this).attr("href");
            $("body").removeClass("active");
            //사리지는 시간 뒤에 페이지 이동
            setTimeout(function () {
                location.href = link;
            }, 500);
            // $("section").fadeOut(600, function () { //콜백함수. 600뒤에 실행해라
            //     location.href = link;
            // });


        });
    }, 10);

});