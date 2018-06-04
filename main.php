<!DOCTYPE>

<html lang="no">
    
<head>
<meta charset="utf-8">

<title></title>
</head>
    

<body>
    
    
    
<form method="post" action="main.php">
<input type="hidden" name="submitted" value="true" />

<label> Name:<input type="text" name="name" /></label>
<label> Score: <input type="text" name="score" value="23423"></label>
    
<input type="submit" value="add new score" />
        
</form>
    
<script>

duck.highscore     
    
</script>

    
   
<?php
    
if (isset($_POST['submitted'])) {   

// connect  to the database      
include('leaderboard.php');
    
$name = $_POST['name'] ;
$score = $_POST['score'] ;
$sqlinsert = "INSERT INTO leaderboard (name, score) VALUES ('$name','$score')" ; 
    
    
if (!mysqli_query($conn, $sqlinsert)) {
    die('error inserting new record') ;
    } // end of my nested if statement
    
    $newrecord = "record added" ;
         
    
}   // end of main if statement
?>
    
    

    
    
<!-- DISPLAY DATA from database -->
    
    
<!-- 

\'SELECT name, score\n"

    . "FROM us \n"

    . "ORDER BY score DESC\n"

    . "LIMIT 10"';

-->
    
<h1>Display data </h1>
    
<?php
include('leaderboard.php');
    
$sqlget = "SELECT name, score\n"
    . "FROM leaderboard\n"
    . "JOIN (SELECT distinct score score3\n"
    . " FROM leaderboard\n"
    . " ORDER BY score DESC\n"
    . " LIMIT 2, 1) x\n"
    . "ON score >= score3\n"
    . "ORDER by score DESC\n"
    . "\n"
    . "";
    
    
    
    
    
$sqldata = mysqli_query($conn, $sqlget) or die ('error getting');

echo "<table>";
echo "<tr><th>NAME</th><th>SCORE</th></tr>" ;
    
while ($row = mysqli_fetch_array($sqldata, MYSQLI_ASSOC)) {
    echo "<tr><td>" ;
    echo $row['name'] ;
    echo "</td><td>" ;;
    echo $row['score'] ;
    echo "</td></tr>" ; 
}
    
echo "</table>" ;
    
?>
    

    
    
</body>





</html>