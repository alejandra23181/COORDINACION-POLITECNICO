<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'nodejs');

function connect(){
    $connect = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);

    if(mysqli_connect_errno($connect)){
        die("Fiel" .mysqli_connect_error());
    }

    return $connect;
}

$con = connect();

?>