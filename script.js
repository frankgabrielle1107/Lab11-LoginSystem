function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Empty validation
    if(user == "" || pass == ""){

        message.innerHTML = "Please fill in all fields!";
        message.style.color = "red";

    }

    // Username minimum validation
    else if(user.length < 3){

        message.innerHTML = "Username must be at least 3 characters!";
        message.style.color = "orange";

    }

    // Correct login
    else if(user == "admin" && pass == "1234"){

        message.innerHTML = "Login Successful!";
        message.style.color = "green";

        setTimeout(function(){

            window.location.href = "dashboard.html";

        },1000);

    }

    // Wrong credentials
    else{

        message.innerHTML = "Invalid username or password!";
        message.style.color = "red";

    }

}