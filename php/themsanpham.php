<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "gioi_thieu_dien_thoai";
    $producer = $_POST['producer'];
    $phoneName = $_POST['phoneName'];
    $RAM_GB = $_POST['RAM'];
    $price = $_POST['price'];
    $memory_GB = $_POST['memory'];
    $pin_mAh = $_POST['pin'];
    $nameImage = $_FILES['file']['name'];
    $errorImage = $_FILES['file']['error'];
    $tmp_image = $_FILES['file']['tmp_name'];
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    $sql = " INSERT INTO dienthoai (producer,phoneName,RAM_GB,price,nameImage,memory_GB,pin_mAh) VALUES ('$producer','$phoneName','$RAM_GB','$price','$nameImage','$memory_GB','$pin_mAh')";
    if($producer!="" && $phoneName!="" && $RAM_GB!="" && $price!="" && $memory_GB!="" && $pin_mAh!="" && $errorImage == 0)
    {
        $result = mysqli_query($conn,$sql);
        if($result)
        {
            move_uploaded_file($tmp_image,'../image/'. $nameImage);
            echo "Thêm sản phẩm thành công <br>";
            echo "<a href='../index.html'>Về trang chủ</a>";
        }else{
            echo "Thêm ảnh thất bại";
        }
    }
    else
    {
        echo "Thông tin nhập thiếu<br>";
        echo "<a href='../themsp.html'>Nhập lại</a>";
    }
    
