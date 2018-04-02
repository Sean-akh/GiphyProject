$(document).ready(function(){

    //Define the Varibles
    // funny-animation
    var faMovieArray=[], faMovie, faAddMovie;

    // about movie
    var amMovieArray=[], amMovie, maAddMovie, butt;

/**************************** STARTS of Functions ************************/

//display the funny animation
function displayMovieInfo (){
    var movie = $(this).attr("data-name");
    var key = "api_key=dDKdue88ZmaMAeboaltAX6uGX8tgryjS";
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + key + "&q=" + movie.split(' ').join('-') + "&limit=10&lang=en"; 

console.log('Movie name is: ' + movie);
console.log('The Query is: ' + queryURL);

}
/***********************************************************

//Send the query
$.ajax ({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    //process the response
console.log('response is: ' + response);
    var results = response.data;
    console.log('Rating Value is: ' + rate);        
    //place the response in #funny-animation-box
    for(var j = 0; j = results.length; j++) {
        //create the div
        var faDiv = $("<div class='item>'");
        var rating = results[j].rating;

        var rate = $("<p>").text("rating: "+ rating);
        var faImage = $("img");
        faImage.attr("src", result[j].images.original_still.url);

        faDiv.prepend(rate);
        faDiv.prepend(faImage);

        $("#funny-animation-box").prepend(faDiv);

    }

});
***************************************************************************/
// End of display the movie information
//create the buttons
function makeButtons(){
    //Clear the area to avoid multiple button of the same name when a new button is added
    $('#button-box').empty();

    //loop through Funny animation array
    for (var i = 0; i < faMovieArray.length; i++) {
        //Generate the buttons
        butt = $("<button>");
        //Add Class
        butt.addClass("mvButton");
        //Add attribute
        butt.attr("data-name", faMovieArray[i]);
        //Add text to the button
        butt.text(faMovieArray[i]);

var movie_name = faMovieArray[i].split(" ").join("_");
console.log("movie_name: " + movie_name);

butt.attr("name", movie_name);
butt.attr("id", movie_name);

        // Append the button to the div #button-box
        $("#button-box").append(butt);
    }
}


/**************************** END of Functions ************************/

// This function handles events where a movie button is clicked
$("#add-funny-anim").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#funny-animation-input").val().trim();
  
console.log('movie trim value is: ' + movie);

  // Adding movie from the textbox to our array
  faMovieArray.push(movie);
console.log('famovieArray is: ' + faMovieArray);
  // Calling makeButtons which handles the processing of our movie array
  makeButtons();
  //clear input text for next input
  $('#movie-form').each(function(){
    this.reset();
  });
});



// Adding a click event listener to all elements with a class of "mvButton"
// $(document).on("click", ".mvButton", displayMovieInfo);
$("#myButton").onClick(){
    // do some coding....
};



// Calling the renderButtons function to display the intial buttons
makeButtons();





///////// END OF DOCUMENT /////////////////
});