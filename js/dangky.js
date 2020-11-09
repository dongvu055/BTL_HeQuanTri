let tk = document.getElementById("tk");
let mk = document.getElementById('mk');
let remk = document.getElementById('remk');
let taotk = document.getElementById('taotk');
let thongbao = document.getElementById('thongbao');
console.log(thongbao);
taotk.onclick = function () {
    if (tk.value != "" && mk.value != "" && remk.value != "") {
        if (mk.value != remk.value) {
            thongbao.innerHTML = "Mật khẩu không khớp";
        }
        else {
            let dktk = new XMLHttpRequest();
            dktk.onreadystatechange = function()
            {
                if(this.readyState == 4 && this.status == 200)
                {
                    let tb = this.responseText;
                    console.log(tb);
                    if(tb=="Đăng ký thành công")
                    {
                        thongbao.innerHTML = "Đăng ký thành công <br> Tài khoản:" + tk.value + " Mật khẩu:" + mk.value ;
                        tk.value = null;
                        mk.value = null;
                        remk.value = null;
                    }
                    else if(tb == "Tài khoản đã tồn tại"){
                        thongbao.innerHTML = tb;
                    }
                }
            }
            dktk.open("GET","./php/dangky.php?x=" + tk.value + "&y=" + mk.value,true);
            dktk.send();
        }
    }
}
