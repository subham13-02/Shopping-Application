const login=document.getElementById("login-form");

login.addEventListener('submit',(event)=>{
    event.preventDefault();
    let email,password;    
    email=login.elements['email'].value.trim();
    password=login.elements['password'].value.trim();
    
    let userData=new Array();
    userData=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[];

    let msg=document.querySelector(".login-msg");
    if(userData.some((e)=>{return e.email==email && e.password==password})){
        confirm('Login Successful!');
        msg.innerHTML=``;
        let currentUser=userData.filter((v)=>{return v.email==email && v.password==password})[0];
        localStorage.setItem('currentUser', currentUser.email);  
        window.location.href="../../shop/index.html";
    }
    else{
        msg.innerHTML=`Invalid user ID or Password*`;
    }
});