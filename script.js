$(document).ready(function() {

    console.log('READY!');
    
    // fastApp Animate settings
    $("#fastApp").css("opacity", 1.0);
    $("#fastApp").hover(function() {
        $(this).animate({opacity: 0.3}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

    // tomatoTimer Animate settings
    $("#dayPlanner").css("opacity", 1.0);
    $("#dayPlanner").hover(function() {
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

    $("#vegApp").css("opacity", 1.0);
    $("#vegApp").hover(function() {
        $(this).animate({opacity: 0.3}, 500);
        }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

})