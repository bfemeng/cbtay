<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "Shante@cbtayconsulting.com; 
  $subject = "New form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

// Send email
  if (mail($to, $subject, $body)) {
    echo "Thank you for your submission!";
  } else {
    echo "Sorry, there was an error sending your message.";
  }
}
?>
