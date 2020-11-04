import logo from "./logo.svg";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    title: string
}

const Page = (props: PropsType) => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>{props.title}</h2>
            </div>
            <p className="App-intro">
                This is the {props.title} page.
            </p>
            <p>
                <NavLink to="/">Home</NavLink>
            </p>
            <p>
                <NavLink to="/about">About</NavLink>
            </p>
            <p>
                <NavLink to="/settings">Settings</NavLink>
            </p>
        </div>
    )
};

export default Page
