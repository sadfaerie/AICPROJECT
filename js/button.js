$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('#homeBtn').fadeIn();
        } else {
            $('#homeBtn').fadeOut();
        }
    });
    $('#homeBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
