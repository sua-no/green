window.addEventListener('DOMContentLoaded', function () {

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json");
    xhr.send(null);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);

        //pushState
        //onpopstate
        all.addEventListener('click', function (e) {
            var target = e.target;
            var idx = target.dataset.id;
            view(idx);
            history.pushState({ page: idx }, 'title', 'page=' + idx);

        });

        function view(i) {
            console.log(i);
            img.src = data.event[i];
        }

        /* window.onpopstate = function(){
             
         }*/

        window.addEventListener('popstate', function () {
            view(history.state.page);
        });



    }


});