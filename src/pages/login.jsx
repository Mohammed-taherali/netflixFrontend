import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

export default function Login() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch("/api/session", {
            method: "POST",
            body: {},
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                // console.log(data);
                if (data.status === "success") {
                    // navigate('/home')
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])

    // Use effect to hide the message after some time
    useEffect(() => {
        const elem = document.getElementById("errorMess");
        elem.style.visibility = "visible";
        elem.style.opacity = "1";
        setTimeout(() => {
            elem.innerHTML = "";
            elem.style.visibility = "hidden";
            elem.style.opacity = "0";
        }, 10000);
    }, [errorMessage])

    const [formData, setFormData] = useState({
        userEmail: "",
        userPass: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("n v= ", name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // document.getElementById("login-btn").disabled = true;
        // console.log(`${formData.userEmail} ${formData.userPass}`);
        // console.log(e);
        // Send a POST request to your Node.js backend with formData
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                // console.log(data);
                if (data.status === "success") {
                    navigate('/home')
                } else if (data.status === "failure") {
                    setErrorMessage(data.message)
                }


            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <section id="login-section">
            <form onSubmit={handleSubmit} className="loggin-wrapper-form">
                <div className="login-wrapper">
                    <h2 className="signIn">Sign In</h2>
                    <span id="errorMess">{errorMessage}</span>
                    <input type="text" name="userEmail" id="userEmail" placeholder="Email" onChange={handleChange} />
                    <input type="password" name="userPass" id="userPass" placeholder="Password" onChange={handleChange} />
                    <button type="submit" id="login-btn">Sign In</button>
                    <p><span className="new-txt">New to Netflix?</span> <a href="/signup">Sign Up Now</a></p>
                </div>
            </form>
        </section>
    )
}