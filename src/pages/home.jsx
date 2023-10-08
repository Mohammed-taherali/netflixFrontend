import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        fetch("/api/session", {
            method: "POST",
            body: {},
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                // console.log(data);
                if (data.status === "failure") {
                    navigate('/login')
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])
    return (
        <section id="home-section">
            <img style={{ width: "100%" }} src="/jawan-bd2.jpg" alt="jawan backdrop" />
        </section>
    )
}