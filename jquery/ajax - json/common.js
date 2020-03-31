$(function () {
    $.ajax({
        url: "data.json",
        type: "GET", //POST
        dataType: "json",
        success: function (data) {
            //for문으로 데이터 불러오는 방법
            // for (var i = 0; i < data.event.length; i++) {
            //     console.log(data.event[i]);
            // }
            // for (var i of data.event) {
            //     console.log(i); //for of문 : 순차적으로 데이터 나열해줌.i는 value값을 의미함
            // }
            for (var i in data.event) {
                //console.log(data.event[i]);
                //var img Node = "img src="+data.event[i]+">";
                var imgNode = document.createElement("img");
                imgNode.src = data.event[i];
                $("section").append(imgNode);
            }
        }

    });

});