// const h1 = (
//     <h1>Heading 1</h1>
// )

// ReactDOM.render(h1, document.getElementById('root'))

// const handleLogin = () => {
//     alert('login')
// }
const login_form = (
    <form className="form-login">
        <div className='form-group'>
            <label>Username</label>
            <input type="text" />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type="password" />
        </div>
        <div className='form-group'>
            <button type='button' className='btn'
                onClick={() => alert('ok')}
            >Login</button>
            <a href="#">Register</a>
        </div>
    </form>
)

ReactDOM.render(login_form, document.getElementById('root'))