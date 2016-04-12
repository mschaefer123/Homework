// user clicks the #fahrenheit_to_celcius button
$('#fahrenheit_to_celcius').on('click', function () {
	// Get the value from the #temperature and store in variable
	var temperature = $('#temperature').val(); //Can this be a global variable? to avoid a rewrite in the "C to F button" function
	
	// Convert that value to a number 	
	temperature = parseFloat(temperature);
	
	// Convert to celcius and store in variable celcius
	//Subtract 32, then multiply 5, then divide by 9
	var celcius = (temperature - 32) * 5 / 9; //not sure this line is correct
	
	// Display in #result
	$('#result').html(celcius);
});


// user clicks C to F button
$('fahrenheit_to_celsius').on('click', function () {
	
	var temperature = $('#temperature').val();
	temperature = parseFloat(temperature);

	// Multiply by 9, then divide by 5, then add 32
	var fahrenheit = temperature * 9 / 5 + 32;
	
	// Display in #result
	$('#result').html(fahrenheit);
});	