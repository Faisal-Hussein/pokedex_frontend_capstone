// import Container from 'react-bootstrap/Container'


export default function LoginForm(){
    return(
        <>
                <h3>Login</h3>
                <form action="" /*onSubmit={handleLoginFormSubmit}*/>
                    <label htmlFor="username">username</label><br />
                    <input type="text" name='username' required /><br />

                    <label htmlFor="password">password</label><br />
                    <input type="password" name='password' required /><br />

                    <input type="submit" name='Login' value='Login' />
                </form>
        </>
    )
}