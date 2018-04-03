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
            //Add attribute
            butt.attr("type", "button");
            //Add Class
            butt.addClass("mvButton");
            //Add attribute
//butt.attr("data-name", faMovieArray[i]);
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
        $('#FunnyMovies').empty();

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

        var results = response.data;
console.log(results);    
            if(results.length ===0) {
                $('#FunnyMovies').text('Sorry your there is nothing about your request');
            }
            else {
                //place the response in #funny-animation-box
                for(var j = 0; j < results.length; j++) {
                    //create the div
                    var faDiv = $('<div>');
                    faDiv.addClass('item');
                    faDiv.attr('id', results[j].id);
                    //add the image
                    var faImage = $('<img>');
                    faImage.attr("src", results[j].images.original_still.url);
                    faImage.attr("image-still", results[j].images.original_still.url);
                    faImage.attr("image-animate", results[j].images.original.url);
                    faImage.attr("image-state", "still")
                    faImage.addClass('pic-class');
                    faDiv.append(faImage);
                    
                    //add rating of the movie
                    faDiv.append($("<p>").text("rating: " + results[j].rating));
                    $("#FunnyMovies").prepend(faDiv);
                }
            }
        });
        //Create the animation and still transition
        $(document).on("click", ".pic-class", function(){
            var state = $(this).attr('image-state')
            if (state === "still") {
                $(this).attr("src", $(this).attr("image-animate"));
                $(this).attr("image-state", "animate");
            }
            else{
                $(this).attr("src", $(this).attr("image-still"));
                $(this).attr("image-state", "still");
            }
        });
    });

    
    




///////// END OF DOCUMENT /////////////////
});