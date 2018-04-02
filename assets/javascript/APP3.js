$(document).ready(function(){
    //Create Varibles
    var faMovieArray=[], faMovie, faAddMovie, rate, rating, movie, movies, key, queryURL, resultsArray, rate, faImage, faDiv, butt, movie_name, movieID, resultsArrayArray=[];

    /***************** Functions ***************/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Generate the buttons dynamically and their onclick even
    function makeButtons() {
        //Clear the button-box area to avoid duplicates
        $("#button-box").empty();

        //for loop to generate each button
        for (var i = 0; i < faMovieArray.length; i++) {

            //generate the button
            butt = $("<button>");
            //add class
            butt.addClass("mvButton");
            //add attribute
            butt.attr("value", faMovieArray[i] + [i]);
            butt.attr("type", "button");
            //add id to button
            var movie_name = faMovieArray[i].split(" ").join("_");
            butt.attr("id", movie_name);

            //add name to each button
            butt.attr("name", movie_name);

            //add text to button
            butt.text(faMovieArray[i]);

            //append the button to div #button-box
            $("#button-box").append(butt);
        }
    }

    //event on click function to trigger makeButton
    $("#add-funny-anim").on("click", function(event) {
        //avoid the default action from happening
        event.preventDefault();
        //obtain the input from text box
        movie = $("#funny-animation-input").val().trim();
        //add the input to array
        faMovieArray.push(movie);
        //call makeButton to execute
        makeButtons();
        //clear the input text #movie-form for next input
        $("#movie-form").each(function(){
            this.reset();
        });
    });

// Adding a click event listener to all elements with a class of "mvButton"
// creating the query, submit and retrieve the response

    $(document).on("click", ".mvButton", function(){
        //create elements of the query
        var movie =$(this).text();
        var key = "api_key=dDKdue88ZmaMAeboaltAX6uGX8tgryjS";
        var queryURL = "https://api.giphy.com/v1/gifs/search?" + key + "&q=" + movie.split(' ').join('-') + "&limit=10&lang=en"; 

console.log('Movie name is: ' + movie);
console.log('The Query is: ' + queryURL);

                $.ajax ({
                    url: queryURL,
                    method: "GET"
                    })
                    .then(function(response){
                        //process the response
                        results = response.data;
              
                        //place the response in #funny-animation-box
                        for (var j = 0; j < results.length; j++) {
                            //create the div
                            var faDiv = $('<div>')
                            faDiv.addClass('item');
                            //var rate = resultsArray[j].rating;
//console.log('Rating Value is: ' + resultsArray[j].rating);
                            var paragraph = $('<P>');
                            paragraph.text("rating: " + results[j].rating);
//var rate = $(paragraph).text("rating: " + resultsArray[j].rating);
                            var faImage = $("<img>");
                            faImage.attr("src", result[j].images.original_still.url);
        
                            faDiv.prepend(rate);
                            faDiv.prepend(faImage);
        
                            $("#FunnyMovies").prepend(faDiv);
        
                        }

        });
////////////////////////////////////////////////////////////////////////////////////////////
                  /*  .then(function(response){
                    //process the response
                    resultsArray = response.data;              
                    //place the response in #funny-animation-box
                    for(var j = 0; j = resultsArray.length; j++) {
                        //create the div
                        faDiv = $('<div class="item">');
                        //var rate = resultsArray[j].rating;

                        var rate = $("<p>").text("rating: " + resultsArray[j].rating);
                        var faImage = $("img");
                    faImage.attr("src", result[j].images.original_still.url);

                        faDiv.prepend(rate);
                        faDiv.prepend(faImage);

                        $("#FunnyMovies").prepend(faDiv);
                    }
        });*/
    });





    //if image is static or animated onclick
    //switch to static or animation
   /* function changeState() {
    }
*/
});