<?php
if(isset($_POST['submit'])){
    $pagContacto = $_POST['pagina'];
    $destinatario = "pymes@megatech.la"; // this is your Email address
    $remitente = $_POST['email']; // this is the sender's Email address
    $nombre = $_POST['nombre'];    
    $email = $_POST['email'];    
    $tel = $_POST['telefono'];
    $asunto = "Contacto Megatech PyMES";
    $asunto2 = "Copia de su contacto con Megatech PyMES";
    $message = $nombre . ", numero de contacto " .$tel . ", dejo el siguiente mensaje en " .$pagContacto. "  : " . "\n\n" . $_POST['comentario'] . "\n\n Correo de contacto: " . $email;
    $message2 = "Le dejamos una copia del mensaje de contacto enviado a Megatech PyMES " . $first_name . "\n\n" . $_POST['comentario'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($destinatario,$subject,$message,$headers);
    mail($remitente,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    header('Location: gracias.html');
}
?>

