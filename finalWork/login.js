const registered = [
    {
        email: 'donaldduro@gmail.com',
    password: '12345678'
    },
    {
    email: 'donaldo19@icloud.com',
    password: '87654321'
    }
];
document.getElementById("link").style.display = "none";
document.getElementById("redirect").style.display = "none";
document.getElementById("forgot").style.display = "none";
document.getElementById("register").style.display = "none";
let register = document.getElementById('register');
let eMail = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let paragraph1 = document.getElementById('p1');
let paragraph2 = document.getElementById('p2');
let paragraph3 = document.getElementById('p3');
let forgot = document.getElementById('forgot');
let showForm = document.getElementById('show');
let link = document.getElementById('link');
let redirect = document.getElementById('redirect');
let newEmail = document.getElementById('changeEmail');
let newPassword = document.getElementById('changePassword');
let enterEmail = document.getElementById('enterEmail');
let enterPassword = document.getElementById('enterPassword');
let paragraph4 = document.getElementById('p4')
let loggedIn = () => {for(let i=0; i<registered.length; i++){
    if(eMail.value === registered[i].email && password.value === registered[i].password){
paragraph1.innerHTML = 'You are logged in. Click ' + redirect.innerHTML + ' to go to the home page';
    break;}
    else{
        paragraph1.innerHTML = 'Wrong Username or Password.';
        paragraph2.innerHTML = link.innerHTML;
        register.style.display = 'none';
    }
}};
let change = () => {
    if(forgot.style.display === 'none'){
    forgot.style.display = 'block';}
    else{
        forgot.style.display = 'none';
    }
}
let setNew = () => {
    for(let i=0; i<registered.length; i++){
    if(newEmail.value === registered[i].email){
        registered[i].password = newPassword.value;
        paragraph3.innerHTML = 'You can insert your username and new password';
        break;
    }else{
    paragraph3.innerHTML = 'Insert a valid username';}}
}

let registerNow = () => {
    if(register.style.display === 'none'){
        register.style.display = 'block';}
        else{
            register.style.display = 'none';
        }

  
}

let newMember = () => {
    for(let i=0; i<registered.length; i++){
        if(enterEmail.value === registered[i].email){
            paragraph4.innerHTML = 'This account already exists.'
            break;
        }else if(enterEmail.value == '' || enterPassword.value == ''){
paragraph4.innerHTML = 'Please enter an username and password'; 
break;}
else{
        paragraph4.innerHTML = 'Your new account is created.'
        const newestMember = {email: enterEmail.value, password: enterPassword.value}
        registered.push(newestMember);
    break;}}
}