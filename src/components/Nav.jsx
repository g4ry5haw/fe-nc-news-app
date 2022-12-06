import "../App.css";
import React from 'react';
import Title from './Title'
import Search from "./Search";
import Topics from "./Topics";


const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-title">
                <div>
                    <Title />
                </div>
                <div>
                    <Search />
                </div>
            </div>
            <div>
                <Topics />
            </div>
        </div>
    );
};

export default Nav;