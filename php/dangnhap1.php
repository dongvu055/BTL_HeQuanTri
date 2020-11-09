<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "gioi_thieu_dien_thoai";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql = "SELECT * FROM admin WHERE status='on'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    while($kq = mysqli_fetch_assoc($result))
    {
        echo $kq['user'];
    }