$(document).ready(function() {

    console.log('READY!');
    
    // fastApp Animate settings
    $("#fastApp").css("opacity", 1.0);
    $("#fastApp").hover(function() {
        $(this).animate({opacity: 0.3}, 500);
        }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });


    $('#fastApp').on('click', function() {
        console.log('CLICKED!');
    });


    // tomatoTimer Animate settings
    $("#tomatoTimer").css("opacity", 1.0);
    $("#tomatoTimer").hover(function() {
        $(this).animate({opacity: 0.3}, 500);
        }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

    // weatherApp Animate settings
    $("#weatherApp").css("opacity", 1.0);
    $("#weatherApp").hover(function() {
        $(this).animate({opacity: 0.3}, 500);
        }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

})