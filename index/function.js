
function changAccountName(){
    let isLogin = !!localStorage.getItem("token");
    if(isLogin){
        console.log(isLogin);
        document.getElementById("taikhoan").innerHTML = "LÊ ĐỨC ANH";
    }
}