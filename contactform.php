<?php
if (isset($_POST['submit'])) {
    $firstName = $_POST['Fname'];
    $lastName = $_POST['Lname'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "jeremy@jeremyjl.com";
    $subject = "New form submission from your website";
    $headers = "From: ".$mailFrom;
    $txt = "you have received an email from " . $firstName. " " . $lastName . "\n\n".$message.".\n\n"."Please contact me on:".$phone;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}