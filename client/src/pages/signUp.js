import React from 'react';
import SignupForm from '../components/Forms/SignupForm';


export default function Signup() {
  //Hooks
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //Handlers
  /**
   * Save Button 
   */
  const handleSubmit = async () => {
    console.log(email, password);
  }
  return (
    <div align="center">
      <div className="container">
        <hr />
        <section className="hero is-medium" align="center">
          <SignupForm setEmail={setEmail} setPassword={setPassword} save = {handleSubmit}/>
        </section>
      </div>
    </div>
  )
}
