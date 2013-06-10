$(function(){
	var printList = $('#print-reading-list');
		signedIn = $('#signed-in'); 
		signInForm = $('#sign-in-form');
		LogInDropDown = $('#login-dropdown');
	printList.hide();
	signedIn.hide();
	$('#sign-in-btn').on( 'click', function(){
		printList.show();
		signedIn.alert(); 
		signInForm.hide();
		LogInDropDown.hide();
		}); 
});