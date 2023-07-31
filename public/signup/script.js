const signup=document.getElementById("signup-form");
signup.addEventListener('submit',(event)=>{
    event.preventDefault();
    let fname,lname,mail,password;

    fname=signup.elements['first-name'].value.trim();
    lname=signup.elements['last-name'].value.trim();
    email=signup.elements['email'].value.trim();
    password=signup.elements['password'].value.trim();
    let msg=document.querySelector(".signup-msg");

    let userData=new Array();
    userData=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[];


    if(fname==""||lname==""||password==""){
        msg.innerHTML=`All the data are compulsory to fill*`;
        signup.reset();
        return;
    }

    if(signup.elements['password'].value.trim()===signup.elements['confirm-password'].value.trim()){
        if(userData.some((e)=>{return e.email==email})){
            msg.innerHTML=`This Email id Alredy Excist*`;
        }
        else{
            userData.push({
                "fname":fname,
                "lname":lname,
                "email":email,
                "password":password,
            });
            localStorage.setItem("user",JSON.stringify(userData));
            msg.style.color="green";
            msg.innerHTML=`<h2>Signup Successful !</h2>`;
            signup.reset();
        }
        

    }
    else{
       msg.innerHTML=`Passwords Should Be Same*`;
    }
});