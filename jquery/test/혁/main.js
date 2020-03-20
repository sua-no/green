$(function () {
    var idx;
    var lyPop =  $('.ly-pop');
    var li = $('.gallery li');
    var btns = $('.ly-pop div a');

    var lypopImg = document.querySelector('.ly-pop figure p img');
    var lypopFigcaption = document.querySelector('.ly-pop figure figcaption');
console.log(btns.length);
    lyPop.hide();
    
    $('.gallery li').on('click', function(){
        lyPop =  $('.ly-pop');
        idx = $(this).index();

        change(idx);
        
        $('.ly-pop').show();

    });
    
   btns.eq(0).on('click', function(){
        idx--;
        change(idx);
   });

   btns.eq(1).on('click', function(){
        idx++;
        change(idx);
  });


   function change(idx){
       if(idx == 0){
        btns.eq(0).hide();
       }else if(idx == li.length-1){
        btns.eq(1).hide();
       }else{
        btns.eq(0).show();
        btns.eq(1).show();
       }
    lypopImg.src = li[idx].querySelector('img').src;
    lypopFigcaption.innerHTML = li[idx].querySelector('figcaption').innerHTML;
   }
});



