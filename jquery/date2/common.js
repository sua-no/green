$(function () {
    var today = new Date(),
        year, month, date, day, txt, txt2, day2
    sun = ["일", "월", "화", "수", "목", "금", "토"],
        div = document.querySelector("div"),
        lastDay = new Date("2020-06-08"),
        oneDay = 24 * 60 * 60 * 1000;

    year = today.getFullYear();
    month = today.getMonth() + 1;
    date = today.getDate();
    day = sun[today.getDay()];
    //txt = "<h2>오늘은 " + year + "년 " + month + "월 " + date + "일 " + day + "요일 입니다</h2>"
    txt = `<h2>오늘은  ${year}년  ${month}월 ${date}일 ${day}요일 입니다</h2>`; //${} backtick사용

    div.innerHTML = txt;

    day2 = Math.round((lastDay - today) / oneDay);
    txt2 = "<h2>종강일 (2020.6.8)까지 <span>" + day2 + "</span>일 남았습니다</h2>";
    div.innerHTML += txt2;

    var eventS = new Date('2020-04-01');
    var eventE = new Date('2020-04-08 18:00:00');
    console.log(today);
    if (today >= eventS && today <= eventE) {
        console.log("이벤트 기간입니다.");
    } else {
        console.log("이벤트가 종료 되었습니다.");
    }
});