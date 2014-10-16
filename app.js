$( document ).ready(function() {        
 
  /*Allows Return key to submit text from form */
   $('#input').keydown(function(e) {
       
        if( e.which === 32 && this.value === '' ) {
            return false;
        }  
	   if(e.keyCode == 13) {
		
    		var task = $(this).val();
    		if ( task.length === 0) {
          alert("Please enter a task.")
    	
  			}
  			else {
  	
        $("#addedtasks").append('<p>' + task + '</p>');
        $('#input').val("");
        $("#taskplaceholdersection").children(":first-child").remove();
        
  			}
		}
	});


   $(document).on("click", "p", function() {
      $(this).toggleClass("completed");
  });

  $(document).on("dblclick", "p", function() {
      $(this).fadeOut("medium", function() {
        $(this).remove();
        $("#taskplaceholdersection").append('<p class="taskplacemarks">' + '</p>');
    });
  });

 
 
});