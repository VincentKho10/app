function preventSubmit(event){
    event.preventDefault();
    
    const inpUname = document.getElementById('username').value;
    const inpPwd = document.getElementById('password').value;
    const inpConfPwd = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    if(inpPwd == inpConfPwd){
        const data = {inpUname , inpPwd , inpConfPwd , email};
        
        window.location.href = '/'
    } else {
        alert('Password confirmation mismatch');
    }
}