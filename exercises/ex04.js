$("#needy-button").click(function(){ 
    //what to do when the button is clicked
    counter += 1;
    if (counter == 1){
        $("#needy-button").html("<strong>I was clicked <em>" + counter + "</em> time</strong>");
    }
    else if (counter >= 100){
        $("#needy-button").html("<strong>Wow! I was clicked <em>" + counter + "</em> times</strong>");
    }
    else{
        $("#needy-button").html("<strong>I was clicked <em>" + counter + "</em> times</strong>");
    };
});
