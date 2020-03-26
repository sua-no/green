$(function () {
    $.ajax({
        url: "data.xml",
        type: "GET", //POST
        dataType: "xml",
        // beforeSend: function () {}, //문서 로드시 발생 (로딩바)
        // complete: function () {}, //문서로드 완료 시점 발생(로딩바 display:none)
        success: function (data) {
            let imgTag;
            $(data).find("item").each(function (i) { //i : index
                //console.log($(this).text());
                //console.log($(this).index());
                imgTag = "<img src=" + $(this).text() + ">";
                $("section").append(imgTag);


            });
        }, //로드 성공 시 발생
        error: function () {
            alert("fail");
        } //로드 에러 시 발생
    });

});