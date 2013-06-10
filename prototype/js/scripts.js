$(function(){
	var userInformation = $('#user-information');
		signedIn = $('#signed-in'); 
		signInForm = $('#sign-in-form');
		LogInDropDown = $('#login-dropdown');
	userInformation.hide();
	signedIn.hide();
	$('#sign-in-btn').on( 'click', function(){
		userInformation.show();
		signedIn.alert(); 
		signInForm.hide();
		LogInDropDown.hide();
		}); 
});