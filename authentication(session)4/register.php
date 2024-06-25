<?php
require("includes/db.php");
if($_SESSION["REQUEST_METHOD"]=="post"){
    $username=$_POST["username"];
    $password=$_POST["password"];
    $stmt=
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <form action="register.php" method="post">
        <p>username : </p>
        <input type="text" name="username" id="username">
       <br>
       <p>password : </p>
       <input type="text" name="password" id="password">
       <br>
       <input type="submit" value="Register">
    </form>
</body>
</html>