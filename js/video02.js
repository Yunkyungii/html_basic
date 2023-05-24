$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'HFaa_jr-lbk',
        // 내가 재생하고 싶은 곳 선택
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#conVideo').YTPlayer({
        videoURL: 'HFaa_jr-lbk',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#conVideo2').YTPlayer({
        videoURL: 'HFaa_jr-lbk',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#conVideo3').YTPlayer({
        videoURL: 'HFaa_jr-lbk',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})