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

   $("#clearList").hover(function() {
      $('#clearList <a>').css("color:#6ad3ff");
  }); 

   $(document).on("click", "p", function() {
      $(this).toggleClass("completed");
  });

  $(document).on("dblclick", "p", function() {
      $(this).fadeOut("slow", function() {
        $(this).remove();
        $("#taskplaceholdersection").append('<p class="taskplacemarks">' + '</p>');
    });
  });

 
 
});