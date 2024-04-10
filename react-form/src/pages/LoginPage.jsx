import { useState } from "react"


export default function LoginPage(){
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        mobile: ''
    })

    const handleInputValue = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        // const loginData = {
        //     email: email,
        //     password: password
        // }

        console.log(formState);
    }

    const handleCancel = () => {
        // setEmail('')
        // setPassword('')
        setFormState({
            email: '',
            password: '',
            mobile: ''
        })
    }
    console.log(formState);
    return (
        <form onSubmit={handleLogin} className="w-50">
            <h3 className="text-success fw-bolder py-2">Login</h3>
            <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control"
                    value={formState.email}
                    name = 'email'
                    // onInput={(e) => setEmail(e.target.value)}
                    onInput={(e) => handleInputValue(e)}
                    required
                />
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    value={formState.password}
                    name = 'password'
                    onInput={(e) => handleInputValue(e)}
                    // onInput={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Mobile</label>
                <input 
                    type="tel" 
                    className="form-control"
                    value={formState.mobile}
                    name = 'mobile'
                    onInput={(e) => handleInputValue(e)}
                    // onInput={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-group mb-2">
                <button type="submit" className="btn btn-dark me-2">Login</button>
                <button type='button' className="btn btn-warning"
                    onClick={handleCancel}
                >Cancel</button>
            </div>
        </form>
    )
}