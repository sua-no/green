$(function () {
    var today = new Date();
    // console.log(today);
    // console.log(today.getFullYear());
    // console.log(today.getMonth() + 1); //index로 출력. +1해야 현재 달
    // console.log(today.getDate());
    // console.log(today.getDay()); //일~월. 요일
    // var day = ["일", "월", "화", "수", "목", "금", "토"];
    // console.log(day[today.getDay()]);
    // console.log(today.getHours());
    // console.log(today.getMinutes());
    // console.log(today.getSeconds());

    //날짜변경
    var lastDate = today.setDate(today.getDate() + 2);
    console.log(lastDate); //1970년 1월 1일 0시~~현재값까지의 초

    var aa = new Date(lastDate);  //변경된 날짜로 변경
    console.log(  aa.getDate() ); //변경된 날짜 확인
        
    today.setDate(today.getDate() + 2); //날짜 변경
    console.log(today); //변경된 날짜

    var oneDay = 24*60*60*1000;
        
    var changeDate = new Date('2020-04-10');
        console.log('월' + (changeDate.getMonth()+1)  );
        
    console.log(Math.round((changeDate - today) / oneDay  ));
});