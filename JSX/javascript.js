// const h1 = document.createElement("h1")
// h1.innerText = "Heading 1"
// document.getElementById('root').appendChild(h1)

const login_form = document.createElement('form')
login_form.className = 'form-login'

const div_username = document.createElement("div")
div_username.className = 'form-group'
const label_username = document.createElement('label')
label_username.innerText = 'Username'
const input_username = document.createElement('input')
input_username.type = 'text'
div_username.appendChild(label_username)
div_username.appendChild(input_username)

login_form.appendChild(div_username)

const div_password = document.createElement("div")
div_password.className = 'form-group'
const label_password = document.createElement('label')
label_password.innerText = 'Password'
const input_password = document.createElement('input')
input_password.type = 'password'
div_password.appendChild(label_password)
div_password.appendChild(input_password)

login_form.appendChild(div_password)


const div_button = document.createElement("div")
div_button.className = 'form-group'
const btn_login = document.createElement('button')
btn_login.type = 'button'
btn_login.className = 'btn'
btn_login.innerText = "Login"
btn_login.onclick = function(){
    let user = {
        "username": input_username.value,
        "password": input_password.value
    }
    console.log(user);
}

const link_register = document.createElement('a')
link_register.href = '#'
link_register.innerText = 'Register'

div_button.appendChild(btn_login)
div_button.appendChild(link_register)

login_form.appendChild(div_button)


document.getElementById('root').appendChild(login_form)