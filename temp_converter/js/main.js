// user clicks the #fahrenheit_to_celcius button
$('#fahrenheit_to_celsius').on('click', function () {
	// Get the value from the #temperature and store in variable
	var fahrenheit = $('#temperature').val(); //Can this be a global variable? to avoid a rewrite in the "C to F button" function
	
	// Convert that value to a number 	
	fahrenheit = parseFloat(fahrenheit);
	
	// Convert to celcius and store in variable celcius
	//Subtract 32, then multiply 5, then divide by 9
	var celcius = (fahrenheit - 32) * 5 / 9; //not sure this line is correct
	
	// Display in #result
	$('#result').html(fahrenheit + " &deg; fahrenheit = " + celcius + "&deg; celsius");
});


// user clicks C to F button
$('#celsius_to_fahrenheit').on('click', function () {
	
	var celcius = $('#temperature').val();
	celcius = parseFloat(celcius);

	// Multiply by 9, then divide by 5, then add 32
	var fahrenheit = celcius * 9 / 5 + 32;
	
	// Display in #result
	$('#result').html(fahrenheit + " &deg; celcius = " + celcius + "&deg; fehrenheit");
});	

//problem was in spelling, logic was close but was not running b.c it wasnt linking to html. always double check spelling by copy pasting from html. 