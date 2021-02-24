import React, { useState } from "react"
import Navigation from "../Navigation/Navigation"
import Link from "next/link"
import classes from "./Header.module.scss"

const header = (props) => {
    const [darkTheme, setDarkTheme] = useState(props.isDark)

    const themeToggler = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <header
            style={{
                "backgroundColor": darkTheme ? "#000" : "#efefef",
            }}
            className={classes.Header} >
            <div className={classes.Logo}>
                <Link href="/">
                    <a>
                        <img
                            style={{
                                "backgroundColor": darkTheme ? "#fff" : null
                            }}
                            className={classes.LogoImage} width="32" src="../../images/film.svg" alt="logo" />
                        <span
                            onClick={themeToggler}
                            style={{
                                "color": darkTheme ? "#fff" : "#000"
                            }}
                            className={classes.LogoText}>Next Movies
                    </span>
                    </a>
                </Link>
            </div>
            <Navigation navigation={props.navigation} />
        </header>
    )
}

export default header