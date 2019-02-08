// Assignment #1 Homework
//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	
	//declaring the Host Name variable
	var hostName;

	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;

	//setting the variable hostName to the input field's id named hostNameInput
	hostName = document.getElementById('hostNameInput').value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	// consolo log the Hostname variable to review string
	console.log('Variable hostName: ' + hostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

	//setting the HTML code in the span id hostName Placeholder with the variable
	document.getElementById('hostNamePlaceholder').innerHTML = hostName;
} 