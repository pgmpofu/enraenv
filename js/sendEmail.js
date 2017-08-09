function sendEmail()
{
     $.ajax({
           url: "mail.php",
           type: "POST",
           success: function(response) {
               if (!response) {
                    alert("Something went wrong. Please try again");
                    return;
               }

               var parsedJSON = eval('('+response+')');

               // If there's an error, display it.
               if(parsedJSON.Error) {
                  // Handle session timeout.
                  if (parsedJSON.Error == "Timeout") {
                       alert("Session timed out. Please login again.");
                       window.location.reload();
                   }
                }
               document.getElementById('mailStatus').innerHTML = "Email Sent successfully";
            }
     });
}
