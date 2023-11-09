const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

const scrollDeactivation = () => {
    document.body.style.overflow = 'hidden';
}
const scrollReactivation = () => {
    document.body.style.overflow = 'visible';
}

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('animate');
    menu.classList.toggle('animate');
    if(hamburger.classList.contains('animate')){
        scrollDeactivation();
    } else{
        scrollReactivation();
    }
})

//Dialog Events
const signupDialog = document.querySelector('.dialog>#signup-dialog');
const loginDialog = document.querySelector('.dialog>#login-dialog');
const forgotPasswordDialog = document.querySelector('.dialog>#forgot-password-dialog');

// signupDialog.show();