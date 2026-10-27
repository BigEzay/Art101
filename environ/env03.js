let environmentTitle = "The Dirty bubble";

let environmentElements = ["dry", "cold breeze", "warm breeze", "Dried ground",];

let mainEntity = {
    name: "The Gooch",
    type: "soft border",
    mood: "Green",
    isMoving: true,
    favoriteElement: environmentElements[3]
};

let buttonMoods = [
    "Bubble is Evil!",
    "Bubble is getting tired...",
    "Bubble is wrathful!",
    "Bubble is angry!",
    "Bubble is venglful"
];

let count = 0;

$("button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My name is " + mainEntity.name + ".</p>";
    message = message + "<p>I am an " + mainEntity.type + ".</p>";

    $("#environment-output").html(message);
    changeMood(count);

    function changeMood(clicks) {
    if (clicks <= 3) {
        $("#mood").html(buttonMoods[0]);
        } else if (clicks <= 6) {
        $("#mood").html(buttonMoods[1]);
        } else {
        $("#mood").html(buttonMoods[2]);
    } 
}



});