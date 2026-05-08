function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(user == "" || pass == ""){

        message.innerHTML = "Please fill all fields";
        message.style.color = "red";

    }

    else if(user == "admin" && pass == "1234"){

        message.innerHTML = "Login Successful";
        message.style.color = "green";

        setTimeout(function(){

            window.location.href = "dashboard.html";

        },1000);

    }

    else{

        message.innerHTML = "Wrong username or password";
        message.style.color = "red";

    }

}