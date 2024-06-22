<?php
require ("includes/db.php");
session_start();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST['username'];
    $password=$_POST['password'];
    $stmt=$conn->prepare("SELECT * FROM sessions WHERE password = ? ");
    $stmt->bind_param("s",$password);
    $stmt->execute();
    if($stmt->num_rows == 1){
        $row=$stmt->fetch();
        $id=$row["id"];
        $_SESSION["user_id"]=$id;
      header("Location : welcome.php");
    }else{
        header("Location : register.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>login</title>
  </head>
  <body>
  <form action="login.php" method="post">
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
