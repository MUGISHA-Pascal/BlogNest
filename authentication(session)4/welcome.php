<?php
session_start();
if(!isset($_SESSION["user_id"]){
    header("Location:login.php");
   exit;    
})
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome page</title>
</head>
<body>
  <h2>welcome client</h2>
  <a href="logout.php">Logout</a>
</body>
</html>