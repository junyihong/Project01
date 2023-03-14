window.onscroll = function(){
    var scroll = window.scrollY;
    var windowHeight        = $(window).height(),
        heightDocument      = (windowHeight) + ($('#main__fourth').height()) + ($('footer').height());
        console.log(scroll);
    $('#main__fourth').css({
        'background-position-y' : 200 - (scroll * 100/ heightDocument) + '%',
    });
    $('#video-background').css({
        'top' : 60 + (scroll / 200 ) +'%'
    })
};
