$(document).ready(function(){
$("#validate").click(function(){
    var name = $("#name").val()
    if ( name.match('^[a-zA-Z]{3,16}$') ) {
        //alert( "Valid name" );
    }
    else {
        alert("Name should be in between 5 to 16 characters");
    }
    var email = $("#email").text()
    var mobile = $("#mobileNumber").text()
    var filter = /^[7-9][0-9]{9}$/
    if(!validateEmail(email))
    {
        console.log("Email is not valid")
    }
    if(validateEmail(email))
    {
    if (!filter.test(mobile)) {
        alert("Please enter valid number");
    }
    }
   
})

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
});