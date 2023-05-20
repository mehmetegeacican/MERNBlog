import React from 'react'
import LoginForm from '../components/Forms/LoginForm';

export default function Login() {

    /**
     * Hooks
     */
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    //Handlers
    /**
     * Save Button 
     */
    const handleSubmit = async () => {
        console.log(email,password);
    }

    return (
        <div align="center">
            <div className="container">
                <hr />
                <section className="hero is-medium" align="center">
                    <LoginForm setEmail = {setEmail} setPassword ={setPassword} save = {handleSubmit} />
                </section>
            </div>
        </div>
    )
}
