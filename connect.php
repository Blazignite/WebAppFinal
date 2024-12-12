<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNum = $_POST['phoneNum'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $conn = new mysqli('localhost', 'root', 'test', 'your_database_name');
    if ($conn ->connect_error){
        die('Connection Failed : ' .$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into registration(firstName, lastName, phoneNum, email, message)
            values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $firstName, $lastName, $phoneNum, $email, $message);
        $stmt->execute();
        echo "registration successful..";
        $stmt->close();
        $conn->close();
    }
}
?>