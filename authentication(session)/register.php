
<?php
require("includes/db.php");
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST['username'];
    $password=$_POST['password'];
    $stmt=$conn->prepare("INSERT INTO sessions (username,password) VALUES (?,?)");
    $stmt->bind_param("ss",$username,$password);
    $stmt->execute();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="register.php" method="post">
    <p>username :</p>
   <input type="text" id="username" name="username">
<br>
<p>password :</p>
<input type="text" id="password" name="password">
<br>
<input type="submit">
</form>
</body>
</html>