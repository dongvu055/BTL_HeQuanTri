<?php
    $dljson = $_GET['guidl'];
    $dlchuan = json_decode($dljson);
    $mang=array();
    $i=0;
    foreach($dlchuan as $key => $value)
    {
        $j=0;
        $mang[$i][$j]=$key;
        $mang[$i][$j+1]=$value;
        $i++;
    }
    $host = "localhost";
    $user = "root";
    $pass ="";
    $db_name = "gioi_thieu_dien_thoai";
    $conn = mysqli_connect($host,$user,$pass,$db_name);
    if($i==1)
    {
        $a = $mang[0][0];
        $b = $mang[0][1];
    }else if($i==2)
    {
        $a = $mang[0][0];
        $b = $mang[0][1];
        $c = $mang[1][0];
        $d = $mang[1][1];
    }else if($i==3)
    {
        $a = $mang[0][0];
        $b = $mang[0][1];
        $c = $mang[1][0];
        $d = $mang[1][1];
        $e = $mang[2][0];
        $f = $mang[2][1];
    }else if($i==4)
    {
        $a = $mang[0][0];
        $b = $mang[0][1];
        $c = $mang[1][0];
        $d = $mang[1][1];
        $e = $mang[2][0];
        $f = $mang[2][1];
        $g = $mang[3][0];
        $h = $mang[3][1];
    }else if($i==5)
    {
        $a = $mang[0][0];
        $b = $mang[0][1];
        $c = $mang[1][0];
        $d = $mang[1][1];
        $e = $mang[2][0];
        $f = $mang[2][1];
        $g = $mang[3][0];
        $h = $mang[3][1];
        $k = $mang[4][0];
        $q = $mang[4][1];
    }
    if($i==0)
    {
        $sql = "SELECT * FROM dienthoai";
    }else if($i==1){
        $sql = "SELECT * FROM dienthoai WHERE $a = '$b' ";
    }else if($i==2)
    {
        $sql = "SELECT * FROM dienthoai WHERE $a = '$b' AND $c ='$d' ";
    }else if($i==3)
    {
        $sql = "SELECT * FROM dienthoai WHERE $a = '$b' AND $c ='$d' AND $e='$f' ";
    }else if($i==4)
    {
        $sql = "SELECT * FROM dienthoai WHERE $a = '$b' AND $c ='$d' AND $e='$f' AND $g='$h' ";
    }else if($i==5)
    {
        $sql = "SELECT * FROM dienthoai WHERE $a = '$b' AND $c ='$d' AND $e='$f' AND $g='$h' AND $k ='$q'";
    }
    $result = mysqli_query($conn,$sql);
    $row = mysqli_num_rows($result);
    $biendem=0;
    $mang1= array();
     while($kq = mysqli_fetch_assoc($result))
    {
        $mang1[$biendem][0]=$kq["producer"];
        $mang1[$biendem][1]=$kq["phoneName"];
        $mang1[$biendem][2]=$kq["RAM_GB"];
        $mang1[$biendem][3]=$kq["price"];
        $mang1[$biendem][4]=$kq["nameImage"];
        $mang1[$biendem][5]=$kq["memory_GB"];
        $mang1[$biendem][6]=$kq["pin_mAh"];
        $biendem++;
    }
    
    $mangtrave = json_encode($mang1);
    echo $mangtrave;
    