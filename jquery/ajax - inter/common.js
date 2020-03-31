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
            var imgTag = '',
                itemRow = 3,
                first = 0,
                last = itemRow;

            setTimeout(function () {
                function getItem() {
                    $(data).find('item').each(function (i) {

                        if (first <= i && i < last) {
                            imgTag = "<img src=" + $(this).text() + ">";
                            $('section').append(imgTag);

                            $('section img').eq(i).hide().fadeIn();
                        }
                    });
                }
                getItem()
                //$('section').html(imgTag);
                $('section').fadeIn();
                $('button').on('click', function () {
                    first += itemRow;
                    last += itemRow;
                    getItem();
                });
            }, 2000);


        }, //로드 성공 시 발생
        error: function () {
            alert("fail");
        } //로드 에러 시 발생
    });

});