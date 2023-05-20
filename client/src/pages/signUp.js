import React from 'react';
import SignupForm from '../components/Forms/SignupForm';


export default function Signup() {
    //Hooks
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  return (
    <div align="center">
      <div className="container">
        <hr />
        <section className="hero is-medium" align="center">
          <SignupForm email={email} password={password} setEmail={setEmail} setPassword={setPassword}/> 
        </section>
      </div>
    </div>
  )
}
