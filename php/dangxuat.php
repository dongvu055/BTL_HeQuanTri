<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "gioi_thieu_dien_thoai";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql = "SELECT * FROM admin WHERE status='on'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    $sql1 = "UPDATE admin SET status='off'";
    $result = mysqli_query($conn,$sql1);
