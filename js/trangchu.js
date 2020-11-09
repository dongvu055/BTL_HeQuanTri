//Các biến toàn cục chủ đạo
// let user = "";
let khungdn = document.getElementsByClassName("khungdn")[0];
let dn = document.getElementsByClassName("okdangnhap")[0];
let thoat = document.createElement("div");
let dieuhuong = document.getElementById("dieuhuong");
let allThongTin = document.getElementsByClassName("content")[0];
let timkiemtheobang = document.getElementsByClassName("timkiem2")[5];
let timkiemserch = document.getElementById("thetimkiem");
let linksp = document.getElementById("linksp");
let dangnhap=0;
//Đăng xuất
thoat.onclick = function () {
    let dangxuat = new XMLHttpRequest();
    dangxuat.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dieuhuong.click();
        }
    }
    dangxuat.open("GET", "./php/dangxuat.php", true);
    dangxuat.send();
}
//Sự kiện xảy ra khi load trang
window.onload = function () {
    timkiemtheobang.click();
    let lay_user = new XMLHttpRequest();
    lay_user.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let user = this.responseText;
            console.log(user);
            if (user != "") {
                // console.log(user);
                dn.remove();
                thoat.innerHTML = "Đăng xuất";
                let username = document.createElement("div");
                username.innerHTML = user;
                let themsp = document.createElement("div")
                themsp.innerHTML = "Thêm sản phẩm";
                khungdn.appendChild(themsp);
                khungdn.appendChild(username);
                khungdn.appendChild(thoat);
                themsp.onclick = function()
                {
                    console.log(themsp);
                    linksp.click();
                }
            } else {
            }
        }
    }
    lay_user.open("GET", "./php/dangnhap1.php", true);
    lay_user.send();
}
//Tìm kiếm thông tin theo thẻ chọn
let dltimkiem1 = [];
let dltimkiem2 = [];
let chuoidttl = "";
timkiemtheobang.onclick = function () {
    allThongTin.innerHTML = "";
    let i = 0, j = 0;
    dltimkiem1 = [];
    dltimkiem2 = [];
    chuoidttl = "";
    if (thechon1.value != "") {
        dltimkiem1[i] = thechon1.name;
        dltimkiem2[j] = thechon1.value;
        i++;
        j++;
    }
    if (thechon2.value != "") {
        dltimkiem1[i] = thechon2.name;
        dltimkiem2[j] = thechon2.value;
        i++;
        j++;
    }
    if (thechon3.value != "") {
        dltimkiem1[i] = thechon3.name;
        dltimkiem2[j] = thechon3.value;
        i++;
        j++;
    }
    if (thechon4.value != "") {
        dltimkiem1[i] = thechon4.name;
        dltimkiem2[j] = thechon4.value;
        i++;
        j++;
    }
    if (thechon5.value != "") {
        dltimkiem1[i] = thechon5.name;
        dltimkiem2[j] = thechon5.value;
        i++;
        j++;
    }
    for (let m = 0; m < i; m++) {
        chuoidttl += '"' + dltimkiem1[m] + '":"' + dltimkiem2[m] + '"';
        if (m < i - 1) {
            chuoidttl += ", ";
        }
    }
    let chuoihoanchinh = "{" + chuoidttl + "}";
    let chuoiso1 = JSON.parse(chuoihoanchinh);
    let chuoiso2 = JSON.stringify(chuoiso1);
    //Gửi dữ liệu lấy thông tin hiển thị ra màn hình
    let guidl = new XMLHttpRequest()
    guidl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dltv = JSON.parse(this.responseText);
            // console.log($dltv);
            // console.log($dltv.length);
            if (dltv.length != 0) {
                for (let dli = 0; dli < dltv.length; dli++) {
                    let the = document.createElement("div");
                    let img = document.createElement("img");
                    let thongtin = document.createElement("div");
                    thongtin.innerHTML = dltv[dli][1];
                    the.appendChild(img);
                    the.appendChild(thongtin);
                    img.src = "././image/" + dltv[dli][4];
                    img.names = dltv[dli][4];
                    the.appendChild(img);
                    allThongTin.appendChild(the);
                    // console.log("da load anh");
                }
                //Thêm hiệu ứng mờ cho thẻ
                for(let dohoa = 0 ; dohoa <dltv.length ; dohoa ++)
                {
                    //console.log(allThongTin.childNodes[dohoa]);
                    allThongTin.childNodes[dohoa].onmouseover = function ()
                    {
                        allThongTin.childNodes[dohoa].style.opacity = 0.5;
                    }
                    allThongTin.childNodes[dohoa].onmouseout = function()
                    {
                        allThongTin.childNodes[dohoa].style.opacity=1;
                    }
                    //Chuyển sang file showthongtin.html để hiển thị thông tin chi tiết của sản phẩm
                    allThongTin.childNodes[dohoa].onclick = function ()
                    {
                        //console.log(allThongTin.childNodes[dohoa].childNodes[1].names);
                        let ttanh = allThongTin.childNodes[dohoa].childNodes[1].names;
                        //console.log(ttanh);
                        let guianhlensv = new XMLHttpRequest();
                        guianhlensv.onreadystatechange = function()
                        {
                            if(this.readyState == 4 && this.status == 200)
                            {
                                console.log(this.responseText);
                                let ahref = document.createElement("a");
                                ahref.href = "./showthongtin.html";
                                ahref.click();
                            }
                        }
                        guianhlensv.open("GET","././php/guianhlentemp.php?anhguilen="+ ttanh,true);
                        guianhlensv.send();
                    }
                }
            }else
            {
                let thongbao = document.createElement("span");
                thongbao.innerHTML = "Không có thông tin về điện thoại";
                allThongTin.appendChild(thongbao);
            }
        }
    }
    guidl.open("GET", "././php/timkiemtheobang.php?guidl=" + chuoiso2, true);
    guidl.send();
}
timkiemserch.onkeyup = function()
{
    allThongTin.innerHTML = ""
    let valuekey = timkiemserch.value;
    console.log(valuekey);
    let reskey = new XMLHttpRequest();
    reskey.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let dltv = JSON.parse(this.responseText);
            // console.log($dltv);
            // console.log($dltv.length);
            if (dltv.length != 0) {
                for (let dli = 0; dli < dltv.length; dli++) {
                    let the = document.createElement("div");
                    let img = document.createElement("img");
                    let thongtin = document.createElement("div");
                    thongtin.innerHTML = dltv[dli][1];
                    the.appendChild(img);
                    the.appendChild(thongtin);
                    img.src = "././image/" + dltv[dli][4];
                    the.appendChild(img);
                    allThongTin.appendChild(the);
                    // console.log("da load anh");
                }
            }else
            {
                let thongbao = document.createElement("span");
                thongbao.innerHTML = "Không có thông tin về điện thoại";
                allThongTin.appendChild(thongbao);
            }
        }
    }
    reskey.open("GET","././php/congcutimkiem.php?tkiem=" + valuekey,true);
    reskey.send();
}
