<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "gioi_thieu_dien_thoai";
    $users = $_GET['x'];
    $password = $_GET['y'];
    $trangthai = 0;
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql1 = "SELECT * FROM admin";
    $result1 = mysqli_query($conn,$sql1);
    while($kq = mysqli_fetch_assoc($result1))
    {
        if($kq["user"]==$users)
        {
            $trangthai = 1;
            break;
        }
    }
    if($trangthai==0)
    {
        $sql = "INSERT INTO admin (user,passwords) VALUES('$users','$password')";
        $result = mysqli_query($conn,$sql);
        if($result)
        {
            echo "Đăng ký thành công";
        }
        else{
            echo "Đăng ký thất bại";
        }
    }
    else{
        echo "Tài khoản đã tồn tại";
    }