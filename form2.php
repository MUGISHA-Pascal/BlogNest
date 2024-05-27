<!-- 
<?php
try{
  $conn = new PDO("mysql:host=localhost;sqlite:form2db.sqlite",'pascal','');
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "connected";
//   $stmt=$conn->prepare('SELECT * FROM actions');
//   $stmt->execute();
//   $results=$stmt->fetchAll();
//   echo $results;
//   $conn=NULL;
}catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
?> -->
<?php

$db_name = 'form2db.sqlite'; // Replace with your database filename

try {
  $db = new PDO("sqlite:$db_name");
  // Set error mode to exception for better error handling
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected to SQLite database successfully";
    $stmt=$db->prepare('SELECT action FROM actions');
  $stmt->execute();
  $results=$stmt->fetchAll();
  foreach($results as $result){
    echo " the action is ".$result;
  }
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

?>
