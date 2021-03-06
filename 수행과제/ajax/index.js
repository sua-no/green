$(function () {
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        type: 'get',
        beforeSend: function () {
            $('.loading').fadeIn();
        },
        success: function (data) {
            var photo = '',
                pop = '',
                text = '',
                idx = 0,
                full, thum, title, contents;
            // $(data).find('article').each(function () {
            //     photo = '<article class="thumb">' + $(this).html() + '</article>';
            //     $('#main').append(photo);
            // });
            $(data).find("item").each(function (i) {
                photo = '<article class="thumb"></article>';
                $('#main').append(photo);
                full = $(this).find("full").text();
                thum = $(this).find("thum").text();
                title = $(this).find("title").text();
                contentsAppend(i);
            });
            function contentsAppend(idx) {
                contents = "<a href='" + full + "' class='image'></a>";
                contents += "<img src='" + thum + "'></a>";
                contents += "<h2>" + title + "</h2>"
                $("article").eq(idx).append(contents);
            }
            $('#main').on('click', 'article', function (e) {
                e.preventDefault();
                $('.poptrox-overlay').show();
                idx = $(this).index();
                dataInfo();
                //                var url = $(this).find('a').attr('href'),
                //                    text = $(this).find('h2').text(),
                //                    pop = '';
                //
                //                pop = '<img src = "' + url + '" > ';
                //                $('.poptrox-overlay').show();
                //                $('.poptrox-popup .pic').html(pop);
                //                $('.poptrox-popup .caption').html(text);
                //                //my code


            });
            $('.nav-previous').click(function () {
                if (idx <= 0) {

                } else {
                    idx--;
                }
                dataInfo();
            });
            $('.nav-next').click(function () {
                idx++;
                dataInfo();
            });

            function dataInfo() {
                pop = $('article').eq(idx).find('a').attr('href');
                text = $('article').eq(idx).find('h2').text();
                $('.poptrox-popup .pic img').attr('src', pop);
                $('.caption').text(text);
            }

            $('.icon').click(function () {
                $('footer').toggleClass('active');
            });

            $('.closer').click(function () {
                $('.poptrox-overlay').hide();
            })

            $('.primary').click(function (e) {
                e.preventDefault();
                if ($('#name').val() == '' || $('#email').val() == '') {
                    alert('warning');
                } else {
                    $('footer').removeClass('active');
                }
            });




        },
        complete: function () {
            $('.loading').fadeIn();
            0
        },
        error: function () {
            alert('fail');
        }
    });
});
