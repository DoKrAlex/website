  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function validateForm() {
    // Validate First Name
    var fname = document.forms["contactForm"]["firstname"].value;
    if (fname == "") {
      alert("First Name must be filled out");
      return false;
    }
  
    // Validate Last Name
    var lname = document.forms["contactForm"]["lastname"].value;
    if (lname == "") {
      alert("Last Name must be filled out");
      return false;
    }
  
    // Validate Reason (selection is made)
    var reason = document.forms["contactForm"]["reason"].value;
    if (reason == "") {
      alert("Please select a reason for contacting");
      return false;
    }
  
    // Validate Subject (textarea not empty)
    var subject = document.forms["contactForm"]["subject"].value;
    if (subject == "") {
      alert("Please provide a subject");
      return false;
    }
  
    // If everything is fine, submit the form
    return true;
  }