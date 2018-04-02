$(document).ready(function(){

    //Define the Varibles
    // funny-animation
    var faMovieArray=[], faMovie, faAddMovie, rate, rating;

    // about movie
    var amMovieArray=[], amMovie, maAddMovie, butt;

/**************************** STARTS of Functions ************************/


//create the buttons
function makeButtons(){
    //Clear the area to avoid multiple button of the same name when a new button is added
    $('#button-box').empty();

    //loop through Funny animation array
    for (var i = 0; i < faMovieArray.length; i++) {
        //Generate the buttons
        butt = $("<button>");

butt.attr("type", "button");
        //Add Class
        butt.addClass("mvButton");
        //Add attribute
        butt.attr("data-name", faMovieArray[i]);
        //Add text to the button
        butt.text(faMovieArray[i]);

//var movie_name = faMovieArray[i].split(" ").join("_");
//console.log("movie_name: " + movie_name);
// butt.attr("name", movie_name);
// butt.attr("id", movie_name);

        // Append the button to the div #button-box
        $("#button-box").append(butt);
        
// Adding a click event listener
// $("#" + faMovieArray[i]).on("click", displayMovieInfo);
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
console.log('famovieArray is2: ' + faMovieArray);
  // Calling makeButtons which handles the processing of our movie array
  makeButtons();
  //clear input text for next input
  $('#movie-form').each(function(){
    this.reset();
  });
});



// Adding a click event listener to all elements with a class of "mvButton"
 // $(document).on("click", ".mvButton", displayMovieInfo);
 
// $(".mvButton").on("click", function(event){

$(document).on("click", ".mvButton", function(){
    // alert( $(this).text() + " is clicked." );

    //var movie = $(this).attr("data-name");
    var movie =$(this).text();
    var key = "api_key=dDKdue88ZmaMAeboaltAX6uGX8tgryjS";
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + key + "&q=" + movie.split(' ').join('-') + "&limit=10&lang=en"; 

console.log('Movie name is: ' + movie);
console.log('The Query is: ' + queryURL);

            $.ajax (
                {
                url: queryURL,
                method: "GET"
                }
            )
            .then(function(response){
                //process the response
            console.log('response is: ' + response);
                var results = response.data;
            console.log(results);                
                //place the response in #funny-animation-box
                for(var j = 0; j = results.length; j++) {
                    //create the div
                    var faDiv = $("<div class='item>'");
                    //var rate = results[j].rating;

                    var rate = $("<p>").text("rating: " + results[j].rating);
                    var faImage = $("img");
                    faImage.attr("src", result[j].images.original_still.url);

                    faDiv.prepend(rate);
                    faDiv.prepend(faImage);

                    $("#funny-animation-box").prepend(faDiv);

                }
console.log('Rating Value is: ' + rate);  
});

    
});
    







// Calling the renderButtons function to display the intial buttons
//makeButtons();






///////// END OF DOCUMENT /////////////////
});