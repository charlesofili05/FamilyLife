document.getElementById("burger-menu").addEventListener("click", function() {
    this.classList.toggle("closed");
    document.getElementById("mobileNavLinkPage").classList.toggle("open");
    document.getElementById("mobileTopNav").classList.toggle("fixednav");
    document.body.classList.toggle("no-scroll");
    
  });

    document.querySelector("#contactusMainForm").submit((e)=>{
        e.preventDefault();

        document.querySelector('button[type="submit"]').text("Sending Message...")

        let name = document.querySelector('input[name="name"]').val()
        let email = document.querySelector('input[name="email"]').val()
        let number = document.querySelector('input[name="number"]').val()
        let subject = document.querySelector('input[name="subject"]').val()
        let message = document.querySelector('textarea[name="message"]').val()
        let submit = document.querySelector('input[name="submit"]').val()

        document.querySelector("#formMessage").load("mail.php",{
            name: name,
            email: email,
            number: number,
            subject: subject,
            message: message,
            submit: submit
        }, function(response, status, xhr) {
            // Revert the text of the submit button back to its original state
            document.querySelector('button[type="submit"]').text("Send message")
        });
        
    })
