$(function () {

    const model = ['ioniq', 'gasper', 'sonata'];

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1);
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
})