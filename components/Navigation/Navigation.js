import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import classes from "./Navigation.module.scss"

const navigation = (props) => {
    const router = useRouter()
    return (
        <ul className={classes.Navigation}>
            {props.navigation.map(item => {
                return (
                    <li key={item.id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? classes.active : ""}>{item.title}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default navigation