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

// DIALOG EVENTS HANDLERS
const signupDialog = document.querySelector('.dialog>#signup-dialog');
const loginDialog = document.querySelector('.dialog>#login-dialog');
const forgotPasswordDialog = document.querySelector('.dialog>#forgot-password-dialog');

// signupDialog.show();

let signupDialogIsOpen = loginDialogIsOpen = false;

const showSignUpDIalog = () => {
    signupDialog.show();
    loginDialog.close();
    signupDialogIsOpen = true;
    loginDialogIsOpen = false;

    document.querySelector('dialog#signup-dialog form p a')
    .addEventListener('click', e => {
        showLoginDialog();
    })
}
const showLoginDialog = () => {
    loginDialog.show();
    signupDialog.close();
    loginDialogIsOpen = true;
    signupDialogIsOpen = false;

    document.querySelector('dialog#login-dialog form p a')
    .addEventListener('click', e => {
        showSignUpDIalog();
    })

    document.querySelector('dialog#login-dialog form>a')
    .addEventListener('click', e => {
        showForgotPasswordDialog();
    })
}
const showForgotPasswordDialog = () => {
    forgotPasswordDialog.show();
    loginDialog.close();

    document.querySelector('dialog#forgot-password-dialog form a')
    .addEventListener('click', e => {
        forgotPasswordDialog.close();
        showLoginDialog();
    })
}

document.querySelector('div.login')
.addEventListener('click', e => {
    e.preventDefault();
    
    if(e.target.textContent === 'Sign up'){
        showSignUpDIalog();
    } else if(e.target.textContent === 'Log in'){
        showLoginDialog();
    }
})

//dialog close button
document.querySelectorAll('form img.close')
.forEach(closeBtn => {
    closeBtn.addEventListener('click', e => {
        if(signupDialogIsOpen){
            signupDialog.close();
        } else if(loginDialogIsOpen){
            loginDialog.close();
        }
    })
})