$(document).ready(function() {
    // Store the URL to the image API.
    const jsonApiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=72';

    // Using jQuery's getJSON() function to access to API and retrieve data.
    const imagesJSON = $.getJSON(jsonApiUrl, function( data ){
        console.log( "success" );
    }).done(function( imagesJSON /* pass in images */) {
        // Create a separate object array in case I need to use the original
        images = imagesJSON; // object array of images
        console.log("It's nice to see what we got...");
        console.log(imagesJSON);
    }).fail(function(response) {
        // Inside fail(), we can handle error cases.
        console.log(response);
        alert('JSON AJAX call failed.');
    });
})// end (document).ready()