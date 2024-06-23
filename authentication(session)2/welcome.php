<?php
session_start();
if(!isset($_SESSION["user_id"])){
    header("Location:login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome</title>
</head>
<body>
<h1>welcome to the client side</h1>
<a href="logout.php">logout</a>
</body>
</html>