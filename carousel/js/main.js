// Create an array of image paths
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

// Set a var for our currentPosition
var currentPosition = 0;

// User clicks "next" button
$('#next').on('click', function () {
	
	// add one to the currentPosition
	currentPosition = currentPosition + 1;
	
	//if current position is the last image 
	if (currentPosition === images.length - 1) {
	
	// then Disable the next button
	$('#next').add	
 	}
	// Change the src of #image-to-vote-on to current image at that index


});

// user clicks on the previous button


// user clicks on the downvote button 


//user clicks on the upvote button