<?php                                            

$servername = "localhost";
$username = "id1063417_zoo";
$password = "duck1234";
$dbname = "id1063417_zoo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    


?>







