<?php
// if($_SERVER['REQUEST_METHOD']==='post'){
    $name=$_POST['name'];
    $marks=$_POST['marks'];
    $subject=$_POST['subject'];
    // a simple echo
    // echo "student info :</br> name: ".$name." </br> subject: ".$subject."</br> marks: ".$marks; 
    //data in a table
    class studentinfo{
        public $name;
        public $marks; 
        public $subject;
    };
    public function __constructor($name,$marks,$subject){
        $this->name=$name;
        $this->marks=$marks;
        $this->subject=$subject;
    } ;
    $student=new studentinfo($name,$marks,$subject);
    echo "<table>";
    echo "<tr>";
 foreach($student as $property=>$value){
    echo "<td>".$value."</td>";
 }
 echo "</tr>";
    echo "</table>"
?>