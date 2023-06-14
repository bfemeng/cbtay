<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set up email content
  $to = "Shante@cbtayconsulting.com"; // Your email address
  $subject = "New form submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message . "\n";

  // Send email
  mail($to, $subject, $body);

  // Redirect the user to a thank you page
  header("Location: thank-you.html");
  exit;
}
?>
