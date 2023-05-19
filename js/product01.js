$(function () {
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })

})
// 반응형 옵션: 화면이 작아지면 슬라이드 수를 줄임
// slidesToShow는 슬라이드 수보다 작아야 가능