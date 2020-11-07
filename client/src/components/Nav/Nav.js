import React from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { Link } from "react-router-dom";
import "./Nav.css";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color="orange lighten-3" dark expand="md" scrolling>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                <Collapse isOpen={this.state.collapse} navbar>
                    <NavbarNav left>
{/*                         <NavItem id="navtitle" tag="span">
                            PetSitter
                        </NavItem> */}
                        <NavItem className="nav-item" active>
                            <Link to="/"
                                className={
                                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                                }>Sign-in
                                </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link to="/signup"
                                className={
                                    window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
                                } >Sign-up
                                </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link to="/search"
                                className={
                                    window.location.pathname === "/search" ? "nav-link active" : "nav-link"
                                }>Search
                                </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link to="/favorites"
                                className={
                                    window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"
                                }>Favorites
                                </Link>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Nav;


/* import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light" id="newcolor">
        <span className="navbar-text abs">PetSitter</span>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Sign-In
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/signup"
                    className={
                        window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
                    }
                >
                    Sign-Up
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/search"
                    className={
                        window.location.pathname === "/search" ? "nav-link active" : "nav-link"
                    }
                >
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/favorites"
                    className={
                        window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"
                    }
                >
                    Favorites
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
 */
