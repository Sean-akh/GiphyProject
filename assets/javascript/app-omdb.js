$(document).ready(function(){
    //Define the Varibles
    var faMovieArray=[];
/**************************** STARTS of Functions ************************/

//create the buttons for movies
function makeMovieButtons(){
    //Clear the area to avoid multiple button of the same name when a new button is added
    $('#button-box-m').empty();

    //loop through Funny animation array
    for (var i = 0; i < faMovieArray.length; i++) {
        //Generate the buttons
        buttMovie = $("<button>");
        //Add attribute
        buttMovie.attr("type", "button");
        //Add Class
        buttMovie.addClass("mv-m-Button");
        //Add attribute

        //Add text to the button
        buttMovie.text(faMovieArray[i]);

        // Append the button to the div #button-box-m
        $("#button-box-m").append(buttMovie);
    }
}

// Read the player's input and execute makeButton function 
$("#add-movie").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    // Adding movie from the textbox to our array
    faMovieArray.push(movie);

    // execute makeButton function to generate the button
    makeMovieButtons();

    //clear input text for next input
    $('#movie-form-mv').each(function(){
        this.reset();
    });
});

    //create query request, submit, process response and facilitate the display of information
    $(document).on("click", ".mv-m-Button", function(){
        $('#FunnyMovies').empty();

        var movie =$(this).text();
        var key = "apikey=e85f1642";
        var queryURL = "https://www.omdbapi.com/?" + key + "&t=" + movie.split(' ').join('+') + "&plot=full"; 
        $.ajax (
            {
            url: queryURL,
            method: "GET"
            }
        )
        .then(function(response) {
            var faDivM = $('<div>');
            faDivM.addClass('itemM');

            //getting the image and assign class
            var imgURL = response.Poster;
            var faImageM =  $('<img>');
            faImageM.attr("src", imgURL);
            faImageM.addClass('pic-class-M');
            faDivM.append(faImageM);

            //title
            var title = response.Title;
            faDivM.append($("<p>").html("<h2>" + title + "</h2>"));
            
            //Released Year
            var released = response.Released;
            faDivM.append($("<p>").html("<span style='font-weight: bold;'>Released:</span> " + released));

            var plot = response.Plot;
            var faPlotM = $("<p>").html("<span style='font-weight: bold; text-align: left;'>Plot:</span><br><P style='text-align:justified;'> " + plot + "</p><br>");
            faPlotM.addClass('plot-class');
            faDivM.append(faPlotM);

            //Actors
            var actors = response.Actors;
            faDivM.append($("<p>").html("<span style='font-weight: bold;'>Actors:</span><br> " + actors));

            //getting the rating
            var rating = response.Rated;
            var faRateM = $("<p>").html("<br><br><span style='font-weight: bold;'>Rating:</span> " + rating + "<br>");
            faRateM.addClass('rate-class');
         
            faDivM.append(faRateM);

            // add the div to #FunnyMovies
            $("#FunnyMovies").prepend(faDivM);            
        });
    });
///////// END OF DOCUMENT /////////////////
});