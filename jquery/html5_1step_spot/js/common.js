$(function () {
    //document ready

    $("nav li").on("mouseenter", function () {
        $(this).find("div").stop().slideDown();
    });
    $("nav li").on("mouseleave", function () {
        $(this).find("div").stop().slideUp();
    });
    //선택자 한번만 쓰는 방법
    // $("nav li").on({
    //     mouseenter : function(){},
    //     mouseleave : function(){},
    //     click : function()
    // })

    $(".trigger_menu").on("click", function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $("header p > span").show().animate({
                top: 40,
                opacity: 1
            });
        } else {
            $("header p > span").animate({
                top: 60,
                opacity: 0
            }).hide();
        }
    });

    //end
});