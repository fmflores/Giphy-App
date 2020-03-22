// search bar or input for user to enter a keyterm
// preset list of terms for user to click on
var searchTerms = ["cat", "dog", "penguin", "mouse", "monkey"];

for (var i=0; i < searchTerms.length; i++) {
    $("#btn-div").append(`<button class="btn btn-secondary">${searchTerms[i]}</button>`)
}
// when button is clicked take the value of button and send to search for that term
$(document).on("click", '.btn', function() {
    var text = $(this).text();
    console.log($(this).text());
    getGiphy(text);
})

function getGiphy(term) {
    var endPoint = 'https://api.giphy.com/v1/gifs/search?';
    var apiKey = 'api_key=Z5eiOA65umB8HlF2P8wMzetKbTkKG4r4';
    var search = `&q=${term}&limit=10`;
    
    var queryURL = endPoint + apiKey + search;
    
    var req = {
      url: queryURL,
      method: 'GET'
    };
    
    $.ajax(req).then(function(response) {
      console.log(response);
        appendGiphy(response.data);
     
    })

}

$(document).on("click", 'img', function() {
if ($(this).attr("data-status") == "still") {
    $(this).attr("data-status", "gif")
    $(this).attr("src", $(this).attr("data-gif"))
}else{
    $(this).attr("data-status", "still")
    $(this).attr("src", $(this).attr("data-still"))
}
console.log($(this).attr("data-still"));
console.log($(this).attr("data-gif"));
})
// use giphy api to return a collection based on user input

// write some jquery code to do DOM manipulation
function appendGiphy(data) {

    for (var i=0; i < data.length; i++) {
        $("#results").append(`<img style='width:20%' 
        data-status='still'
        data-still='${data[i].images['fixed_height_small_still'].url}'
        data-gif='${data[i].images['fixed_width'].url}'
        src='${data[i].images['fixed_height_small_still'].url}'>`)
    }

}
// 