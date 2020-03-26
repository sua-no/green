$(function () {
    $.ajax({
        url: "data.xml",
        type: "GET", //POST
        dataType: "xml",
        timeout: 2000, //대기시간 설정
        beforeSend: function () {
            $("section").hide();
            $(".loading").fadeIn();
            //console.log("로딩중");
        }, //문서 로드시 발생 (로딩바)
        complete: function () {
            setTimeout(function () {
                $(".loading").fadeOut();
            }, 2000);

            //console.log("로딩 삭제");

        }, //문서로드 완료 시점 발생(로딩바 display:none)
        success: function (data) {
            setTimeout(function () {
                let imgTag = "";
                $(data).find("item").each(function (i) { //i : index
                    //console.log($(this).text());
                    //console.log($(this).index());
                    if (i < 3) {
                        imgTag = "<img src=" + $(this).text() + ">";
                        $("section").append(imgTag);
                    }

                });
                //$("section").html(imgTag); //변수에 할당연산자 사용하여 한번에 담아서 html에 한번에 추가. 
                $("section").fadeIn(3000);
            }, 2000);


        }, //로드 성공 시 발생
        error: function () {
            alert("fail");
        } //로드 에러 시 발생
    });

});