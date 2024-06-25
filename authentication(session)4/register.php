<?php
require("includes/db.php");
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST["username"];
    $password=$_POST["password"];
    $stmt=$conn->prepare("INSERT INTO sessions (username,password) VALUES (?,?)");
    $stmt->bind_param("ss",$username,$password);
   if ($stmt->execute()){
      header("Location:login.php");
   }
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
        <input type="text" name="username" id="username" required>
       <br>
       <p>password : </p>
       <input type="password" name="password" id="password" required>
       <br>
       <br>
       <input type="submit" >
    </form>
</body>
</html>