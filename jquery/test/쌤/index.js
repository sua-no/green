var lyPop = document.querySelector('.ly-pop');
lyPop.style.display = 'none';

var popImgNode = document.querySelector(".ly-pop p img");
var popTxtNode = document.querySelector(".ly-pop figcaption");

//추출할 노드선택
var gallery = document.querySelector('.gallery');
var li = document.querySelectorAll('.gallery li');
var target;

gallery.addEventListener('click',function(e){
    target = e.target;
    
    for(;target.nodeName != 'LI';
        target = target.parentNode);
    
    var imgNode = target.querySelector('img');
    var txtNode = target.querySelector('figcaption');
    
    popImgNode.src = imgNode.src;
    popTxtNode.textContent = txtNode.textContent;
    lyPop.style.display = 'flex';
    
});

lyPop.addEventListener('click',function(){
    this.style.display = 'none';
});


var button = lyPop.querySelectorAll('div a');
button[0].addEventListener('click',function(e){
    //prev
    e.preventDefault();
    e.stopPropagation();    
    changeGallery("previousElementSibling");
    
});

button[1].addEventListener('click',function(e){
    //next
    e.preventDefault();
    e.stopPropagation();    
    changeGallery("nextElementSibling");
});

function changeGallery(nextBack){
    try{
        var imgNode = eval("target."+nextBack+".querySelector('img')");
    
        var txtNode = eval("target."+nextBack+".querySelector('figcaption')");

        popImgNode.src = imgNode.src;
        popTxtNode.textContent = txtNode.textContent;

        target = eval("target."+nextBack);
        console.log('데이터가 바뀌고 있음');
    }catch{
        console.log('더이상 데이터가 없습니다.');
    }finally{
        //무조건 실행
        console.log('무조건 실행될 구문');
    }

   
}






//prev,next 이벤트 발생
//선택노드
//ly-pop div a[0] prev
//ly-pop div a[1] next







