
function changAccountName(){
    let isLogin = !!localStorage.getItem("token");
    if(isLogin){
        console.log(isLogin);
        document.getElementById("taikhoan").innerHTML = "LÊ ĐỨC ANH";
    }
}
function changeAddress(){
    if(document.pay.rd1.value == "Chon"){
        document.getElementById("address").value="273 An Dương Vương, phường 3 Quận 5, TP. Hồ Chí Minh";
    }
    if(document.pay.rd1.value == "Nhap"){
        document.getElementById("address").value=null;
    }
}