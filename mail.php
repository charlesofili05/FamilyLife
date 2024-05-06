<?php
$success = false;
if (isset($_POST)) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    

    $sendTo = "charlesofili622@gmail.com";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $subject = 'New message from contact form';

    $emailText = "Name: $name\n";
    $emailText .= "Email: $email\n";
    $emailText .= "Phone Number: $number\n";
    $emailText .= "Subject: $subject\n";
    $emailText .= "Message: $message";

    if(mail($sendTo, $subject, $emailText, $headers)){
        $success = true;
    }
}
?>
<script>
    let success = "<?php echo $success; ?>";
    if(success == true){
        document.querySelectorAll('input[name="name"], input[name="email"],  input[name="number"], input[name="subject"],textarea[name="message"]').forEach(function(element) {
    element.value = "";
});
        document.querySelector("#formMessage").classList.add("success")
        
        document.querySelector("#formMessage").innerHTML="email sent successfully";
    }
</script>