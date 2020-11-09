<?php 
    $host = "localhost";
    $user = "root";
    $pass ="";
    $db_name = "gioi_thieu_dien_thoai";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $thamso = $_GET['tkiem'];
    $thamso1 = "'%" . $thamso . "%'";
    $sql = "SELECT * FROM dienthoai WHERE phoneName LIKE $thamso1";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    $i=0;
    $mang = array();
    while($kq = mysqli_fetch_assoc($result))
    {
        $mang[$i][0]=$kq["producer"];
        $mang[$i][1]=$kq["phoneName"];
        $mang[$i][2]=$kq["RAM_GB"];
        $mang[$i][3]=$kq["price"];
        $mang[$i][4]=$kq["nameImage"];
        $mang[$i][5]=$kq["memory_GB"];
        $mang[$i][6]=$kq["pin_mAh"];
        $i++;
    }
    echo json_encode($mang);