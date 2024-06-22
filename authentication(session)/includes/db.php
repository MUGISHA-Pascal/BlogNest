<?php
$conn=new mysqli("localhost","root","","sessiondb");
if($conn->connect_error){
    die("connection failed".$conn->connect_error);
}else{
    echo("connected");
}
?>