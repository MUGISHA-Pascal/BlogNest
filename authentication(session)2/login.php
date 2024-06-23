<?php
 require("includes/db.php");
 session_start();
 if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST["username"];
    $password=$_POST["password"];
    $stmt=$conn->prepare("SELECT * FROM sessions WHERE username=? AND password=?");
    $stmt->bind_param("ss",$username,$password);
    $stmt->execute();
    $result=$stmt->get_result();
    if($result->num_rows){
        $row=$result->fetch_assoc();
        $id=$row["id"];
        $_SESSION["user_id"]=$row;
        header("Location:welcome.php");
    }else{
        header("Location:register.php");
    }
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
<form action="login.php" method="post">
        <p>username :</p>
        <input type="text" name="username" id="username">
        <br>
        <p>password :</p>
        <input type="text" name="password" id="password">
        <br>
        <input type="submit">
        </form>
</body>
</html>