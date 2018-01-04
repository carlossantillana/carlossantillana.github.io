$(document).ready(function(){
    $("#home").click(function() {
        $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
    });
    $("#aboutMe").click(function() {
        $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
    });
    $("#projects").click(function() {
        $('html,body').animate({
            scrollTop: $(".container").offset().top},
            'slow');
    });
    $("#resume").click(function() {
        $('html,body').animate({
            scrollTop: $(".resume").offset().top},
            'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".contact").offset().top},
            'slow');
    });
});
