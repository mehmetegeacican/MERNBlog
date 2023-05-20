import React from 'react'

export default function LoginForm({email,password,setEmail,setPassword}) {

    /**
     * Handles the email
     * @param {*} e 
     */
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <section>
            <div className="hero is-medium has-text-centered">
                <h6 className="title is-2" style={{ fontStyle: "italic" }}>
                    Login
                </h6>
                <hr />
            </div>
            <div className="field">
                <label className="label" style={{ fontFamily: "cursive" }}>
                    Email
                </label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your Email"
                        onChange={handleEmail}
                        style={{ borderRadius: "3rem" }}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label" style={{ fontFamily: "cursive" }}>
                    Password
                </label>
                <div className="control centered">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your Password"
                        onChange={handlePassword}
                        style={{ borderRadius: "3rem" }}
                    />
                </div>
            </div>
            <div className="field">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button
                                className="button is-link"
                                onClick={() => console.log(email,password,"login")}
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
