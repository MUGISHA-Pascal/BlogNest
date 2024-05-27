<?php
$name=$_POST['name'];
if ($name==""){
    echo "please input the name";
} else{
    echo "the name is ".$name ;
}
?>