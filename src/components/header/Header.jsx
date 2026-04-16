import logo from "../../assets/logo.jpeg"


import "./Header.css";

export default function Header() {
    return (
        <div id="header_holder">
            <img id="header_logo" src={logo} alt="logo"></img>
        </div>
    );
}
