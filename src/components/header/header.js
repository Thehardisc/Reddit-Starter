import React from "react";
import './header.css';
import logo from '../images/outline_reddit_black_24dp.png';

export const Header = () => {

    return (
        <div className="Header">
            <div className="template">
                <img src={logo} alt="logo" height="50rem"/>
                <h1><i>RedditCopy</i></h1>
            </div>
        </div>
    )
}