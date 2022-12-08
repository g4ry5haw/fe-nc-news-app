import "../App.css";
import React from 'react';
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div className="nav-header-title">
            <Link to="/">NC News Home</Link>
        </div>
    );
};

export default Title;