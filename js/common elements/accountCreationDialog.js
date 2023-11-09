const accountCreationDialog = document.createElement('div');
accountCreationDialog.classList.add('dialog');

accountCreationDialog.innerHTML = `
    <dialog id="signup-dialog">
        <form action="#" class="sign-up">
            <img src="imgs/close-icon-light.png" alt="close" class="close">

            <div class="dialog-header">
                <h1>SELL4ME</h1>
                <h3>Sign up for an account</h3>
            </div>
            
            <div>
                <label for="email">Email</label>
                <input type="email" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password">
                <span>*password must be at least 6 caracters and must contain letter and number</span>
            </div>
            <div>
                <label for="password">Confirm password</label>
                <input type="password" name="password">
            </div>

            <input type="submit" value="Sign Up">

            <p>Already have an account? <a href="#" class="login">Login</a></p>
        </form>
        </dialog>
        <dialog id="login-dialog">
        <form action="#">
            <img src="imgs/close-icon-light.png" alt="close" class="close">
            
            <div class="dialog-header">
                <h1>SELL4ME</h1>
                <h3>login to your account</h3>
            </div>
            
            <div>
                <label for="email">Email</label>
                <input type="email" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password">
            </div>

            <input type="submit" value="Login">

            <a href="#">Forgot Password</a>
            <p>Don't have an account? <a href="#">sign up</a></p>
        </form>
        </dialog>
        <dialog id="forgot-password-dialog">
        <form action="#">
            <div class="dialog-header">
                <h1>SELL4ME</h1>
                <h3>Reset your account</h3>
            </div>
            
            <div>
                <label for="email">Email</label>
                <input type="email" name="email">
            </div>

            <input type="submit" value="Reset password">

            <a href="#">&larr; Login with new passward</a>
        </form>
    </dialog>
`;

document.body.insertBefore(
    accountCreationDialog, 
    document.querySelector('.top-header')
);