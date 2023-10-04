import dotenv from 'dotenv';

function preventSubmit(event){
    event.preventDefault();

    const inpUname = document.getElementById('username').value;
    const inpPwd = document.getElementById('password').value;

    const login_data = {inpUname , inpPwd};
    const logged = login(login_data);
    window.location.href = '/home';
}

async function login(data){
    const res = await fetch(``);
    const user = Response.json();
    console.log(user);
}