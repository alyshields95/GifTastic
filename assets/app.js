$(document).ready(function () {

    var topics = [
        "Mickey Mouse",
        "Minnie Mouse",
        "Cinderlla",
        "Rapunzel",
        "Elsa"
    ]

    var API_KEY = "awz6IBjPW39QSis3556Ny8cvAAszbvv7";
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + API_KEY + "&limit=10&q=";


    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        $("#buttons").append(button);
        button.addClass("btn btn-info topic");
        button.text(topics[i]);
    };







});