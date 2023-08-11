const user=JSON.parse(localStorage.getItem("user"));

const current_email=localStorage.getItem("currentUser");
let currIndex;
const current_user=user.filter((e,i)=>{if(e.email==current_email) currIndex=i;return e.email==current_email})[0];
console.log(currIndex);
const user_info=document.getElementById("user-info");

//Profile Display....
let display=document.createElement('div');
display.style.color="grey"
display.innerHTML=`

<b>Name: ${current_user.fname.toUpperCase()}  ${current_user.lname.toUpperCase()}</b></br>
<b>Email:  ${current_user.email}</b>`;

user_info.appendChild(display);

//Profile Edit.....

const change_info=document.getElementById("change-info");

addEventListener("submit",(e)=>{
    e.preventDefault();
    let new_fname=change_info.elements['fname'].value.trim();
    let new_lname=change_info.elements['lname'].value.trim();
    if(new_fname!=="" || new_lname!==""){
        if(new_fname!==""){
            user[currIndex].fname=new_fname;
        }
        if(new_lname!==""){
            user[currIndex].lname=new_lname;
        }
        localStorage.setItem('user',JSON.stringify(user));
        location.reload();
    }
});

//Password Edit.....

const change_pass=document.getElementById("change-password");

addEventListener("submit",(e)=>{
    e.preventDefault();
    const msg=document.querySelector(".edit-msg");
    let currentPassword=change_pass.elements['currentPassword'].value.trim();
    let newPassword=change_pass.elements['newPassword'].value.trim();
    let confirmPassword=change_pass.elements['confirmPassword'].value.trim();

    if(currentPassword===current_user.password){
        if(confirmPassword===newPassword){
            if(newPassword!==currentPassword){
                user[currIndex].password=newPassword;
                localStorage.setItem('user',JSON.stringify(user));
                msg.innerHTML='';
                alert(`Password Changed Successfully!`);
                change_pass.reset();
            }
            else{
                msg.innerHTML=`Your Current Password and New Password can't be same!`;
            }
        }
        else{
            msg.innerHTML=`Both Password Doesn't Match!`;
        }
    }
    else{
        msg.innerHTML=`Invalid Password!`;
    }
});

