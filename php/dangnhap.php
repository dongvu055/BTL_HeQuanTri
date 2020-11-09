<?php
    $host = "localhost";
    $user = "root";
    $pass ="";
    $db_name="gioi_thieu_dien_thoai";
    $username =$_GET['x'];
    $passwordd=$_GET['y'];
    $trangthai=0;
    // $username = "";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql = "SELECT * FROM admin WHERE user= '$username' AND passwords = '$passwordd'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    if($row==1)
    {
        $sql1 = "UPDATE admin SET status= 'on' WHERE user='$username' AND passwords = '$passwordd'";
        $result1 = mysqli_query($conn,$sql1);
        if($result1)
        {
            $trangthai=1;
        }else{
            $trangthai=0;
        }
    }
    else{
        $trangthai=0;
    }
    echo $trangthai;
    mysqli_close($conn);
