<?php require_once "./dabase.php" ?>
<?php
print_r($_POST);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO `ajax_table`(`email`, `password`) VALUES ('$email','$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}