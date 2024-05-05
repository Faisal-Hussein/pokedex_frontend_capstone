import { useState } from "react"


export default function RegisterForm(){
    const [ user, setUser ] = useState({});
    return(
        <>
            <h3>Register</h3>
            <form action="">
                <label htmlFor="email">email</label><br />
                <input type="text" name='email' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required/><br />
                <label htmlFor="username">username</label><br />
                <input type="text" name='username' value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} required/><br />
                <label htmlFor="password">password</label><br />
                <input type="password"name='password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required/><br />
                <label htmlFor="confirm-password">confirm password</label><br />
                <input type="password" name='confirm-password' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} value={user.confirmPassword} required/><br /> <br />

                <input type="button" name='Register' value='Register'/>
            </form>
        </>
    )
}