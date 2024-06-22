<?php
require("includes/db.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare the statement to select user based on username and password
    $stmt = $conn->prepare("SELECT * FROM sessions WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows) {
        $row = $result->fetch_assoc();
        $id = $row["id"];
        $_SESSION["user_id"] = $id;
        header("Location: welcome.php");
    } else {
        header("Location: register.php");
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
    <p>username:</p>
    <input type="text" id="username" name="username">
    <br>
    <p>password:</p>
    <input type="password" id="password" name="password">
    <br>
    <input type="submit">
</form>
</body>
</html>
