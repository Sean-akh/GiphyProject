# GiphyProject
#***********************************************************************
This app allows you to:
1. select a category from the list
2. Based on selected category, you can create a list of your favorite movies, animals ....
2. By clicking on each of your choices, the app will show 10 random animated Gifs.
3. by clicking on each image you can start or stop the animation.
4. By selecting another movie selection, you can repeat the same process

#***********************************************************************

#PLAN Revised:
// Define Varibles
# funny-animation
    var faMovieArray=[], faMovie, faAddMovie;

# about movie
    var amMovieArray=[], amMovie, maAddMovie



//Define HTML id and classes
id fa-Add-Movie ma-Add-Movie







// User selects an option from "about-movie" or "funny-annimation" categories
    //CSS will define the look and feel for each category
    //The theme background change based on the category
 
# funny-animation

    //Provide a field for user to enter topic (like birds,cat, dog, movie ...)
    //generate a button based on the input 
    //upon click of each button create the query and send to Giphy.
    //capturre the response
        1. "slug"
        2. "embed_url" (animation)
        3. "images.original_still.url" (Static)
        4. "rating"
        5. "title"

    //organize and display the response
        //switch image to static url when clicked on animated image
        //switch to animated url wehn clicked on static image
        //

#about-movie
    // Connect to OMDb API
    //Provide a field to enter the movie's name
    // Generate the button
    // upon click of button construct the API Query and submit to OMDb API
    //  Capture response
        1. "Title"
        2. "Rated"
        3. "Released"
        4. "Genre"
        5. "Director"
        6. "Writer"
        7. "Actors"
        8. "Plot"
        9. "Awards"
        10. "Poster" (Image url to display)
        "imdbRating" (Movie's Rating) 
            // the value is out of 10. we can translate that to 5 star rating by the following formula: (5 * imdbRating)/ 10 = 5 star system