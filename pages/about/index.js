import React from "react"
import { NextSeo } from "next-seo"
import axios from "../../axios-global-config"
import classes from "./about.module.scss"

const about = (props) => {
    const SEO = {
        title: props.page.title,
        description: "normal about page",

        openGraph: {
            title: props.page.title,
            description: "normal about page",
        },
    }

    return (
        <>
            <NextSeo {...SEO} />
            <div className={classes.container}>
                <h2>{props.page.title}</h2>
                <p className={classes.Content} dangerouslySetInnerHTML={{ __html: props.page.content }} />
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const response = await axios.get("/pages/1")
    const data = await response.data

    return {
        props: {
            page: data
        },
        revalidate: 1
    }
}

export default about