<?php
    $host = "localhost";
    $user = "root";
    $pass ="";
    $db_name="gioi_thieu_dien_thoai";
    $x=$_GET['x'];
    $y=$_GET['y'];
    $trangthai=0;
    $username = "";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql = "SELECT * FROM admin";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    while($kq=mysqli_fetch_assoc($result))
    {
        if( $x == $kq['user'] && $y == $kq['passwords'])
        {
            $trangthai=1;
            $username=$kq['user'];
        }
    }
    $file = fopen("temp.txt","w");
    fwrite($file,$username);
    fclose($file);
    echo $trangthai;
    mysqli_close($conn);
