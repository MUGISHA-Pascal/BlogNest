<?php
$conn=new mysqli("localhost","root","","sessiondb4");
if($conn->connect_error){
    die("connection failed".connect_error);
}
?> 