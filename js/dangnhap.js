let dn = document.getElementById("dangnhap");
let tk = document.getElementById("tk");
let mk = document.getElementById("mk");
let thongbao = document.getElementById("thongbao");
let chuyenhuong = document.getElementById("chuyenhuong");
console.log(chuyenhuong);
dn.onclick = function () {
    let dn_dl = new XMLHttpRequest();
    dn_dl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res_1 = this.responseText;
            tk.value = null;
            mk.value = null;
            if (res_1 == "1") {
                console.log(res_1);
                chuyenhuong.click();
            } else {
                console.log("Chua duoc");
                thongbao.innerHTML = "Thông tin tài khoản hoặc mật khẩu không chính xác! Chọn Đăng Ký để tạo tài khoản mới!";
            }
        }
    }
    dn_dl.open("GET", "./php/dangnhap.php?x=" + tk.value + "&y=" + mk.value, true);
    dn_dl.send();
}