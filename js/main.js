$(document).ready(function() {
    /*
    ***********************
    **  Variable setup  **
    ***********************
    */
    var images = [],
        displayImages = [],
        totalImages = 0,
        imgPerPage = 12,
        totalPages = 0;
    // Store the URL to the image API.
    const jsonApiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=72';

    /*
    ***************************
    **  Get images from API  **
    ***************************
    */
    // Using jQuery's getJSON() function to access to API and retrieve data.
    const imagesJSON = $.getJSON(jsonApiUrl, function( data ){
        console.log( "success" );
    }).done(function( imagesJSON /* pass in images */) {
        // Create a separate object array in case I need to use the original
        images = imagesJSON; // object array of images
        // Set totalImages
        totalImages = images.length;
        // Determine number of pages by rounding up to integer value
        totalPages = Math.ceil(totalImages / imgPerPage);
        console.log("It's nice to see what we got...");
        console.log(imagesJSON);

        generate_image_gallery();

    }).fail(function(response) {
        // Inside fail(), we can handle error cases.
        console.log(response);
        alert('JSON AJAX call failed.');
    });

    /*
    *****************
    **  Functions  **
    *****************
    */
    function generate_image_gallery() {
        // Variables to load images into, so we only have to update the DOM once
        let pageImages = "", currentImg = "";
        // clear out any existing thumbnails
        $('#gallery').html('');
        // For loop to set image range and create HTML
        for (var i = 0; i < totalImages; i++) {
            // HTML for each image
            currentImg = `<a class="spotlight" id="${images[i].id}" href="${images[i].url}" data-preload="true">
				<img src="${images[i].thumbnailUrl}" alt="${images[i].title}" class="img-thumbnail" aria-label="Placeholder image"/></a>
                </a>`;
            pageImages += currentImg; //add to html string
        } // /for loop
        // Append html to index.html
        $('#gallery').append(pageImages);
    } // /generate_image_gallery_page
})// end (document).ready()