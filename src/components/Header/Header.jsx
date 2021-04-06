import React from "react";
import s from './Header.module.css'

const Header = () => {
    return(
            <header className={s.header}>
                This is header
                <img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png" alt="logo"/>
            </header>
    )
}

export default Header;