<?php
$errors = '';
$myemail = "davidacastro.24@gmail.com"; //<-----Put Your email address here.
if(empty($_POST['Nombre'])  ||
   empty($_POST['Correo']) ||
   empty($_POST['Asunto']) ||
   empty($_POST['Comentario']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['Nombre'];
$email_address = $_POST['Correo'];
$email_subject = $_POST['Asunto'];
$message = $_POST['Comentario'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}


$to = "davidacastro.24@gmail.com";
//$email_subject;
$email_body = "Has Recibido un nuevo Mensaje. \n ".
"Nombre: $name \n ".
"Correo: $email_address\n Asunto: \n $email_subject
Mensaje: \n $message";
//$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
//header('Location: contact-form-thank-you.html');
?>
