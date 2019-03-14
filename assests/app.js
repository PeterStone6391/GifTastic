// notes from tutor session with Michael

// var gifApi =
//   "https://api.giphy.com/v1/gifs/search?api_key=LIpfrXPaXMHI0SPAQt9zVa9vl9FO69QT&q=shiba inu&limit=10&offset=0&rating=G&lang=en";

// $.ajax({
//   url: gifApi,
//   method: "get"
// }).then(function(response) {
//   var gifUrl = response.data[0].images["480w_still"].url;
//   renderGif(gifUrl);
// });
// function renderGif(url) {
//   var img = $("<img>");
//   img.attr("src", url);
//   $("#dogImages").append(img);
// }


///I need to make an array of predetermined buttons
// connect those buttons with Gif values
//when clicking button make the 10 gifs repoulate and not endlessly stack gif groups on top of each other 
// add on click events for still and animate
// add search button that will add  new button with new gif values for that button

$(document).ready(function() {
  // this is an array for the animals pre options on screen shiba inu and cat at the top because i love them!!!! have one shiba and two cats
  var animals = ["shiba", "cat", "panda", "kangaroo", "koala"];

  //
  for(var i = 0; i < animals.length; i++) {
	var button = $("<button>").text(animals[i]);
	button.attr("data-animal", animals[i]);
	button.addClass("animal-button");
	$("#button-array").append(button);
}


$(document).on("click", ".animal-button", function() {
	var animal = $(this).attr("data-animal");
    var gifApi = 
    //"https://api.giphy.com/v1/gifs/search?api_key=LIpfrXPaXMHI0SPAQt9zVa9vl9FO69QT&q=shiba inu&limit=10&offset=0&rating=G&lang=en";
    // why doesn't my api url do any thing? i looked at others projects and it is formated differently than mine 
    $.ajax({
          url: gifApi,
          method: "get"
        }).then(function(response) {
          var gifUrl = response.data[0].images["480w_still"].url;
          renderGif(gifUrl);
        });
        function renderGif(url) {
          var img = $("<img>");
          img.attr("src", url);
          $("#dogImages").append(img);
        }
// this part is what Tom had on the screen in office hours so i copied it to work on it with my tutor later
// $(document).on("click", ".result", function() {
// 	var state = $(this).attr("data-state");

// 	if(state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });