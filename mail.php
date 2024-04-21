<?php
$success = false;
if (isset($_POST)) {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["firstName"];
    $state = $_POST["state"];
    $phone = $_POST["phone"];
    $agree = $_POST["agree"];
    $licensed = $_POST["licensed"];
    $message = $_POST["message"];
    

    $sendTo = "charlesofili622@gmail.com";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $subject = 'New message from contact form';

    $emailText = "First Name: $firstName\n";
    $emailText .= "Last Name: $lastName\n";
    $emailText .= "Email: $email\n";
    $emailText .= "State: $state\n";
    $emailText .= "Phone Number: $phone\n";
    $emailText .= "I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business. \n";
    $emailText .= "Are you a liscenced insurance agent? - $licensed\n";
    $emailText .= "Message: $message";

    if(mail($sendTo, $subject, $emailText, $headers)){
        $success = true;
    }
}
?>
<script>
    let success = "<?php echo $success; ?>";
    if(success == true){
        document.querySelectorAll('input[name="first_name"], input[name="last_name"], input[name="email"], input[name="state"], input[name="phone"], input[name="agree"], select[name="licensed"], textarea[name="message"]').forEach(function(element) {
    element.value = "";
});
        document.querySelector("#formMessage").classList.add("success")
        
        document.querySelector("#formMessage").innerHTML="email sent successfully";
    }
</script>