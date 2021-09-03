import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "../redux/reducers/userSlice"
import { selectUser } from '../redux/reducers/userSlice';
import { useSelector } from "react-redux"
import "./login.css"

const Login = () => {
    const user = useSelector(selectUser);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    let warningMessage = <div className="highlight">
    Username or password is not correct!</div>

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login({
            username,
            password
            })
        )
    }

    const logoutBtn = () => {
        dispatch(logout())
    }

    let content = 
    <div className="login">
        <form className="login__form" onSubmit={e => handleSubmit(e)}>
            <div className="login__form-title">
                <h2>Login</h2>
            </div>
            {!user.triedToLogin || warningMessage}
            <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>

    if (user.isLoggedIn) {
        content = 
        <div>
            <h2>Hello, <span className="highlight">{user.user.username}</span></h2>
            <button type="submit" className="btn" onClick={logoutBtn}>Logout</button>
        </div> 
    }

    return  (content)
}

export default Login;