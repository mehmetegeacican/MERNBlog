import React from 'react'
import LoginForm from '../components/Forms/LoginForm';

export default function Login() {

    /**
     * Hooks
     */
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <div align="center">
            <div className="container">
                <hr />
                <section className="hero is-medium" align="center">
                    <LoginForm email={email} password={password} setEmail = {setEmail} setPassword ={setPassword} />
                </section>
            </div>
        </div>
    )
}
