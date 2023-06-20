const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('animate');
    menu.classList.toggle('animate');
    if(hamburger.classList.contains('animate')){
        scrollDeactivation()
    } else{
        scrollReactivation()
    }
})


//  LOGIN/SIGNUP EVENT
const signupDialog = document.getElementById('signup-dialog');
const signupBtn = document.querySelectorAll('.login>a')[0];
const loginDialog = document.getElementById('login-dialog');
const loginBtn = document.querySelectorAll('.login>a')[1];
const resetDialog = document.getElementById('reset-dialog');

function scrollDeactivation(){
    document.body.style.overflow = 'hidden';
}
function scrollReactivation(){
    document.body.style.overflow = 'visible';
}

/////////   FOR SIGNUP MODAL
signupBtn.addEventListener('click', e => {
    menu.classList.remove('animate');
    hamburger.classList.remove('animate');
    signupDialog.show();
    scrollDeactivation()
})
document.querySelector('#signup-dialog img')
.addEventListener('click', e => {
    signupDialog.close();
    scrollReactivation();
})
document.querySelector('#signup-dialog p>a')
.addEventListener('click', e => {
    signupDialog.close();
    loginDialog.show();
})

///////// FOR LOGIN MODAL
loginBtn.addEventListener('click', e => {
    menu.classList.remove('animate');
    hamburger.classList.remove('animate');
    loginDialog.show();
    scrollDeactivation();
})
document.querySelector('#login-dialog img')
.addEventListener('click', e => {
    loginDialog.close();
    scrollReactivation();
})
document.querySelector('#login-dialog p>a')
.addEventListener('click', e => {
    loginDialog.close();
    signupDialog.show();
    scrollDeactivation();
})

//////  FOR PASSWOED RESET MODAL
document.querySelector('.forgot-password')
.addEventListener('click', e => {
    loginDialog.close();
    resetDialog.show();
    scrollDeactivation();
})
document.querySelector('#reset-dialog a')
    .addEventListener('click', e => {
        resetDialog.close();
        loginDialog.show();
        scrollDeactivation();
})

////////////
document.querySelector('.how-it-works a')
.addEventListener('click', e => {
    signupDialog.show();
    scrollDeactivation()
})