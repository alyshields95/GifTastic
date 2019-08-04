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


    function createImage(response, i) {
        var img = $("<img class='giphy-img'>");
        var rating = $("<h2>Rating: </h2>" + "<p>" + response.data[i].rating + "</p>");

        img.attr("src", response.data[i].images.downsized_still.url);
        img.attr("data-animated", response.data[i].images.downsized.url);
        img.attr("data-still", response.data[i].images.downsized_still.url);
        img.attr("data-state", "still");


        var cardDiv = $("<div class='card' text-white bg-dark id='gif-card'>");
        var cardBody = $("<div class='card-body'>");
        var cardFooter = $("<div class='card-footer'>");

        cardBody.append(img);
        cardFooter.append(rating);
        cardDiv.append(cardBody);
        cardDiv.append(cardFooter);
        return cardDiv;
    }


});