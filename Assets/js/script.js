
var log = document.getElementById("login");
var regi = document.getElementById("register");
var btn1 = document.getElementById("btn1")

function register() {
    btn1.style.left = "90px"
    regi.style.display = "block"
    log.style.display = "none"
}

function login() {
    btn1.style.left = "0px";
    regi.style.display = "none"
    log.style.display = "block"
}

function forgetForm() {
    document.getElementById("button-box").style.display="none"
    document.getElementById("social-icons").style.display="none"
    btn1.style.none = "none";
    regi.style.display = "none"
    log.style.display = "none"
    document.getElementById("forgetForm").style.display="block"

}


const  bar =document.getElementById("bar");
const  close =document.getElementById("close");
const nav=document.getElementById("navbar");

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}





//login 
let loginSubmit = document.getElementById("login");
loginSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const emailErr = document.getElementById("emailError");
    const passErr = document.getElementById("passError");
    //email validation
    if (email == "") {
        emailErr.innerHTML = ("Please Enter the  Email ");
  
    }
    else {
        //Email  should be domain      
        var regex = /[a-z0-9-.]+@[a-z]+\.[a-z]{2,3}$/;
        if (regex.test(email)  === false) {
            emailErr.innerHTML = ("Please enter a valid email id");
        } else if (email.length < 10 != email.length > 30) {
            emailErr.innerHTML == ("Please Enter the  email  minimum  10  and  maximum 30 letters")
        }
        else {
            emailErr.innerHTML = ("");
        

        }
    }

    // password validation

    if (password == "") {
        passErr.innerHTML = ("Please Enter the Password");
    }
    else {
        //password 
        const passregex = /^(?=.*[A-Za-z])[A-Za-z\d\S]{10,50}$/

        if (passregex.test(password) === false) {
            passErr.innerHTML = ("Please Enter the password  minimum 10  and maximum 50 ")
        }

        else {


            if (email !== "") {
                if (email.match(regex)) {
                    sessionStorage.setItem('email', email)
                    window.location = '../../index.html';
                 
                }
            }
        }
    }
})


// register
const regSubmit = document.getElementById("register");
regSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;


    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const passErr = document.getElementById("passErr");
    const conPassErr = document.getElementById("confirmPassErr");




    //name validation

    if (name == "") {
        nameErr.innerHTML = ("Please enter your name ");
    } else {
        var regex = /^[a-zA-Z\S]/;
        if (!regex.test(name)) {
            nameErr.innerHTML = ("Please enter a valid name");
        } else if (name.length < 5) {
            nameErr.innerHTML = ("minimum 5 letters  ");

        } else {
            nameErr.innerHTML = ("")
            // nameErr.removeattribute("disabled")
        }
    }

    //email validation
    if (email == "") {
        emailErr.innerHTML = ("Please Enter the  Email ");
    }
    else {
        //Email  should be domain 
        var regex = /^[a-z0-9-.]+@(?=.*gmail)([a-z])+\.(?=.*com)([a-z]){2,3}$/;
        if (regex.test(email) === false) {
            emailErr.innerHTML = ("Please enter a valid email id   ");
        } else if (email.length < 10 != email.length > 30) {
            emailErr.innerHTML == ("Please Enter the  email  minimum  10  and  maximum 30 letters")
        }
        else {
            emailErr.innerHTML = ("");

        }
    }

    // password validation

    if (password == "") {
        passErr.innerHTML = ("Please Enter the Password");
    }
    else {
        //password 
        const passregex = /^(?=.*[A-Za-z])[A-Za-z\d\S]{10,50}$/

        if (passregex.test(password) === false) {
            passErr.innerHTML = ("Please Enter the password  minimum 10  and maximum 50 ")
        }

        else {

            if (email !== "") {
                if (email.match(regex)) {
                    sessionStorage.setItem('email', email)
                    window.location = '../../index.html';
                }
            }
        }

    }

    if (password != confirmPass) {
        conPassErr.innerHTML = ("password don't match")
    }
    else {
        conPassErr.innerHTML = ('')
    }


})


let getEmail = sessionStorage.getItem("email")
let user = document.getElementById("user");
let logout = document.getElementById("logoutBtn");
let loginBtn = document.getElementById("loginBtn")




if (getEmail == undefined) {
    logout.style.display = 'none';
    document.getElementById("userProfile").style.display="none"
    document.getElementById("userAccount").style.display="none"

} else {
    let getUserName = getEmail.split('@')[0];
    user.innerHTML = `${getUserName.toLocaleUpperCase()}`;
    console.log(getUserName)
    loginBtn.style.display = "none"
    logout.addEventListener('click', (e) => {
        e.preventDefault()
        logOut();
    })
}



function logOut() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("value");
    sessionStorage.removeItem("data")
    window.location = "../../index.html"
}



