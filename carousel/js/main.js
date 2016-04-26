
// GLOBAL VARIABLES-------------

// Create an array of image paths
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

//Create an array for for votes
var votes = [0, 0, 0, 0, 0, 0,]; 

// Set a var for our currentPosition
var currentPosition = 0;

// EVENTS------------------------

// User clicks "next" button
$('#next').on('click', function () {
	
	// add one to the currentPosition
	currentPosition = currentPosition + 1;
	
	//If current position is the last image 
	if (currentPosition === images.length - 1){
		// then Disable the next button
		$('#next').prop('disabled', true);
	}
	$('#prev').prop('disabled', false);

	// Change the src of #image-to-vote-on to current image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition])
});

// User clicks on the previous button
$('#prev').on('click', function () {
	
	//find the currentPosition value saved from clicking #next   
	currentPosition = currentPosition - 1;
	
	// if current position is the first image
	// Dont forget to wrap the if statement in {}
	if (currentPosition === 0){    //problem I had was writting = instead of === which diclares currentPosition IS 0
		// then dsiable the #prev button
		$('#prev').prop('disabled', true);
		$('#next').prop('disabled', false);
	}

	// Change the src of #image-to-vote-on to current image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition])
});


// User clicks on the downvote button 
$('#downvote').on('click', function () {
	// subtract one to the var currentVote
	currentPosition = currentPosition - 1;
	// display the currentVote 
	$('#votes').html('Likes: ' + votes[currentPosition])
});

//User clicks on the upvote button
$('#upvote').on('click', function () {
	// add one to the var currentVote
	currentPosition = currentPosition + 1;
	// display the currentVote
	$('#votes').html('Likes: ' + votes[currentPosition])
});
