<?php
include 'config.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$id = $_GET['id'];
$sql = "SELECT * FROM items WHERE id=$id";
$result = $conn->query($sql);
$item = $result->fetch_assoc();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];

    $sql = "UPDATE items SET title='$title', description='$description' WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        header("Location: dashboard.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Item</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <form method="POST" action="">
        <label for="title">Title:</label>
        <input type="text" name="title" value="<?php echo $item['title']; ?>" required>
        <label for="description">Description:</label>
        <textarea name="description" required><?php echo $item['description']; ?></textarea>
        <button type="submit">Update Item</button>
    </form>
</body>
</html>
