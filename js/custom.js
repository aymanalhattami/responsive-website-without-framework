$(document).ready(function () {
    $('.information .info-list li').click(function () {
        $(this).addClass('tab');
        $(this).siblings().removeClass('tab');
        
        var tabPage = $(this).data('class');
        
        $("." + tabPage).siblings().fadeOut();
        $("." + tabPage).fadeIn();
        
    })
    
    /******************************************************************/
    /* navbar section */
    $('.bar-minus').click(function () {
        $('.header .navbar .dropdown').css({
            width: '100%',
            textAlign: "left"
        });
        $('.header .navbar .dropdown li').css({
            display: "block",
        });
        $('.header .navbar .dropdown').fadeToggle();
    });
});