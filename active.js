function getPageNameFromURL() {
    // Get the current URL
    let url = window.location.href;
    let name
    // Split the URL by slashes ("/")
    let parts = url.split('/');
    if(parts[parts.length-1] == ""){
        parts.pop()
         name = parts[parts.length-1]
    }else{
    let lastPart = parts[parts.length - 1];
        
        // Remove the file extension (if any)
     name = lastPart.split('.')[0];
    }
    // Get the last part of the URL
    
    
    return name;
  }
  function getPageName(url) {
    // Split the URL by slashes ("/")
    let parts = url.split('/');
    
    // Get the last part of the URL
    let lastPart = parts[parts.length - 1];
    
    // Remove the file extension (if any)
    let name = lastPart.split('.')[0];
    
    return name;
  }

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{
    link.classList.remove("active")
})
navLinks.forEach(link=>{
    url = link.href
    if(getPageName(url) == getPageNameFromURL()){
        link.classList.add("active")
    }
})

  // Example usage:

  
$(document).ready(()=>{
    $("#contactForm").submit((e)=>{
        e.preventDefault();

        $('button[type="submit"]').text("Submitting...")

        let firstName = $('input[name="first_name"]').val()
        let lastName = $('input[name="last_name"]').val()
        let email = $('input[name="email"]').val()
        let state = $('input[name="state"]').val()
        let phone = $('input[name="phone"]').val()
        let agree = $('input[name="agree"]').val()
        let licensed = $('select[name="licensed"]').val()
        let message = $('textarea[name="message"]').val()
        let submit = $('input[name="submit"]').val()

        $("#formMessage").load("mail.php",{
            firstName: firstName,
            lastName: lastName,
            email: email,
            state: state,
            phone: phone,
            agree: agree,
            licensed: licensed,
            message: message,
            submit: submit
        }, function(response, status, xhr) {
            // Revert the text of the submit button back to its original state
            $('button[type="submit"]').text("Submit")
        });
        
    })
})