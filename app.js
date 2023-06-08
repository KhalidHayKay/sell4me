const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('animate');
    menu.classList.toggle('animate');
})


//  LOGIN/SIGNUP EVENT
const signupDialog = document.getElementById('signup-dialog');
const signupBtn = document.querySelectorAll('.login>a')[0];
const loginDialog = document.getElementById('login-dialog');
const loginBtn = document.querySelectorAll('.login>a')[1];
const resetDialog = document.getElementById('reset-dialog');

signupBtn.addEventListener('click', e => {
    menu.classList.remove('animate');
    hamburger.classList.remove('animate');
    signupDialog.show();

    document.querySelector('#signup-dialog>button')
    .addEventListener('click', e => {
        signupDialog.close();
    })
})
loginBtn.addEventListener('click', e => {
    menu.classList.remove('animate');
    hamburger.classList.remove('animate');
    loginDialog.show();

    document.querySelector('#login-dialog>button')
    .addEventListener('click', e => {
        loginDialog.close();
    })

    document.querySelector('.forgot-password')
    .addEventListener('click', e => {
        loginDialog.close();
        resetDialog.show();

        document.querySelector('#reset-dialog a')
        .addEventListener('click', e => {
            resetDialog.close();
            loginDialog.show();
        })
    })
})

// console.log(document.querySelector('#login-dialog p>a'))
document.querySelector('#login-dialog p>a').addEventListener('click', e => {
    loginDialog.close();
    signupDialog.show();
})
document.querySelector('#signup-dialog p>a').addEventListener('click', e => {
    signupDialog.close();
    loginDialog.show();
})


//  TESTMONIAL SLIDE
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'ture',
      },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
  });