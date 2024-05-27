<?php
$achieve=$_POST['achieve'];
try{
$conn=new PDO("sqlite:form3db.sqlite");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$qr="INSERT INTO achievements(achievement) values (:achieve)";
$stmt=$conn->prepare($qr);
$stmt->bindParam(":achieve",$achieve);
$stmt->execute();
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
?>