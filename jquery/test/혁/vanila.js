
window.addEventListener("DOMContentLoaded", function () {
const mainPop = document.querySelector('.ly-pop');
const mainPopImg = document.querySelector('img');
const mainPopTxt = document.querySelector('figcaption');
const btns = mainPop.querySelectorAll('a');

const galleryUl = document.querySelector('.gallery');
const galleryLi = galleryUl.querySelectorAll('li');

var mainIndex = 0;

for(var i = 0; i < galleryLi.length; i++){
    galleryLi[i].addEventListener('click', clickChange);
}

    btns[0].addEventListener('click', function(){
        mainIndex--;
        leftRightClickChange();
    });
    btns[1].addEventListener('click', function(){
        mainIndex++;
        leftRightClickChange();
    });

function leftRightClickChange(){
    btnCheck();
    mainPopImg.src = galleryLi[mainIndex].querySelector('img').src;
    mainPopTxt.innerHTML = galleryLi[mainIndex].querySelector('figcaption').innerHTML;
}

function clickChange(){
    console.log(event.target.src);
    var idx = getIndex(event.currentTarget);
    console.log(idx);

    mainPopImg.src = event.target.src;
    mainPopTxt.innerHTML = event.currentTarget.querySelector('figcaption').innerHTML;
    mainPop.classList.add('on');

    mainIndex = idx;

    btnCheck();
}

function btnCheck(){
    if(mainIndex <= 0){
        mainIndex = 0;
        btns[0].classList.add('off');
    }else if(mainIndex >= galleryLi.length-1){
        mainIndex = (galleryLi.length-1);
        btns[1].classList.add('off');
    }else{
        btns[0].classList.remove('off');
        btns[1].classList.remove('off');
    }
}

function getIndex(target) {
    var i = 0;
    while((target = target.previousSibling) != null ) {
        if(target.nodeType != 3){
            i++;
        }
    }
    return i;
}

});