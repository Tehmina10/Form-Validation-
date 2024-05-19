let uname = document.querySelector("#uname");
let pwd = document.querySelector("#pwd");
let uerror = document.querySelector("#uerror");
let perror = document.querySelector("#perror");

let flag = false;
function formvalidate() {
        if (uname.value = "") {
                uerror.innerHTML = "User name is requires"
                flag = false
        }
        else if (uname.value.length < 3) {
                uerror.innerHTML = "min 3 character is requires"
        }
        else {
                flag = true;
                
        }
        if (uname.value = "") {
                perror.innerHTML = "Password is requires"
                flag = false
        }
        else if (pwd.value.length < 7) {
                perror.innerHTML = "min 6 character is requires"
        }
        else {
                flag = true;
                perror.innerHTML=""
        }
        return flag;
}
