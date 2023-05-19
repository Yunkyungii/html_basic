$(function () {
    $('.top_banner .btn').on('click', function () {
        $('.top_banner').toggleClass('on')
    });

    $('.right_banner .btn').on('click', function () {
        $('.right_banner').toggleClass('on')
    });

    $('.left_banner .btn').on('click', function () {
        $('.left_banner').toggleClass('on')
    });
})

// toggle은 누르면 내리고 올림, add는 그냥 닫기