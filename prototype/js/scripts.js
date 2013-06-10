$(function(){
	var printList = $('#print-reading-list');
		signedIn = $('#signed-in-display'); 
	printList.hide();
	signedIn.hide();
	$('#sign-in-btn').on( 'click', function(){
		printList.show();
		signedIn.show(); 
		$('#sign-in-form').hide();
		}); 
});