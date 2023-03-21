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

        // Create a page of images and then display them
        apply_pagination();

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
    function apply_pagination() {
        $('#pagination').twbsPagination({
            // Set twbsPagination required variables
            totalPages: totalPages,
            // Show all pages
            visiblePages: totalPages,

            // Change pages on click in pagination navigation
            onPageClick: function(event, page) {
                // Set page number and get images for that page
                let displayImagesIndex = Math.max(page - 1, 0) * imgPerPage;
                let endRec = (displayImagesIndex) + imgPerPage;
                console.log('Displaying images ' + (displayImagesIndex + 1) + '-' + endRec);
                displayImages = images.slice(displayImagesIndex, endRec); // retrieve the slice of images
                // Create gallery page
                generate_image_gallery();
            } // end onPageClick
        }); // end pagination
    } // end apply_pagination()
    function generate_image_gallery() {
        // Variables to load images into, so we only have to update the DOM once
        let pageImages = "", currentImg = "";
        // clear out any existing thumbnails
        $('#gallery').html('');
        // For loop to set image range and create HTML
        for (var i = 0; i < displayImages.length; i++) {
            // HTML for each image
            currentImg = `<a class="spotlight" id="${displayImages[i].id}" href="${displayImages[i].url}" data-preload="true">
				<img src="${displayImages[i].thumbnailUrl}" alt="${displayImages[i].title}" class="img-thumbnail" aria-label="Placeholder image"/></a>
                </a>`;
            pageImages += currentImg; //add to html string
        } // end for loop
        // Append html to index.html
        $('#gallery').append(pageImages);
    } // end generate_image_gallery
    // Code for changing active link on clicking
    // TODO: need to add code to change active link when scrolling to the top of the page
    var btns = $("#navigation .navbar-nav .nav-link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
})// end (document).ready()