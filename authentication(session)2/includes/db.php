<?php 
$conn=new mysqli("localhost","root","","sessiondb2");
if($conn->connect_error){
    die("connection failed". connect_error);
}
?>