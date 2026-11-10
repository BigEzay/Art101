
$(document).ready(function() {

    let isDay = true;

    $("#changeTime").click(function() {

        $("#environment").toggleClass("day night");

        if (isDay) {

            $("#message").text(
                "The stars emerge. Something feels different..."
            );

            $("#hint").text("The world has gone quiet.");

            isDay = false;

        } else {

            $("#message").text(
                "The sun is shining. Everything feels peaceful."
            );

            $("#hint").text("Click the button to change the world.");

            isDay = true;

        }

    });

});

$("#littleCreature").click(function() {

    let randomLeft = Math.floor(Math.random() * 75) + 5;
    let randomBottom = Math.floor(Math.random() * 150) + 40;

    $(this).css({
        "left": randomLeft + "%",
        "bottom": randomBottom + "px"
    });

    $("#message").text(
        "The little bunny is exploring somewhere new!"
    );

});