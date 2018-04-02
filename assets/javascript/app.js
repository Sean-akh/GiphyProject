$(document).ready(function(){

    //Define the Varibles
    var faMovieArray=[], faMovie, faAddMovie, rate, rating;

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

            // Append the button to the div #button-box
            $("#button-box").append(butt);
        }
    }

    // Read the player's input and execute makeButton function 
    $("#add-funny-anim").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var movie = $("#funny-animation-input").val().trim();

        // Adding movie from the textbox to our array
        faMovieArray.push(movie);

        // execute makeButton function to generate the button
        makeButtons();

        //clear input text for next input
        $('#movie-form').each(function(){
            this.reset();
        });
    });

    //create query request, submit, process response and facilitate the display of information
    $(document).on("click", ".mvButton", function(){
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
        for(var j = 0; j < results.length; j++) {
            //create the div
            var faDiv = $("<div class='item>'");
            //var rate = results[j].rating;

            var rate = $("<p>").text("rating: " + results[j].rating);
            var faImage = $("img");
            faImage.attr("src", results[j].images.original_still.url);

            faDiv.prepend(rate);
            faDiv.prepend(faImage);

            $("#funny-animation-box").prepend(faDiv);

        }
    });

    //Create the animation and still transition




/////////////// End Of Documnent ///////////////////////
});
    







// Calling the renderButtons function to display the intial buttons
//makeButtons();






///////// END OF DOCUMENT /////////////////
});