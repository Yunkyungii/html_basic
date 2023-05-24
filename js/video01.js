$(function () {

    let btn = true;
    // 그대로 쓸  때는 this
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    });
    // ! 는 부정의 뜻

    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    });

    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    });
})