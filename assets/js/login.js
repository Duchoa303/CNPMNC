function login () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username ==="nguyenhuy" && password ==="123456"){
        window.location.href ="home.html";
        window.alert("Welcome, Nguyên Huy!");

    } else {
        window.alert("Sai tên hoặc mật khẩu!")
    }
    if (username === "") {
        alert("Tài khoản không được rỗng");
        email.focus();
        return;
      }
      if (password === "") {
        alert("Mật khẩu không được rỗng");
        password.focus();
        return;
      }
}