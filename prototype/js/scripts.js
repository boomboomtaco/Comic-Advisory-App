$(function(){
	var userInformation = $('#user-information');
		signedIn = $('#signed-in'); 
		logInDropDown = $('#login-dropdown');
		createAccount = $('#create-account');
	userInformation.hide();
	signedIn.hide();
	$('#sign-in-btn').on( 'click', function(){
		userInformation.show(); 
		logInDropDown.hide();
		createAccount.hide();
		}); 
	
	createAccount.on( 'click', function(){
		$('#myModal').modal();
	});
	
});