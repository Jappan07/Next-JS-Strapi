import React from "react"
import axios from "../../../axios-global-config"
import { NextSeo } from "next-seo"
import classes from "./movies.module.scss"

const fetchData = async (slug) => {
    let data = null
    await axios.get(`/movies?slug=${slug}`)
        .then(response => {
            data = response.data
        })
    return data
}

const movie = (props) => {

    const SEO = {
        title: `Next Movies | ${props.movie.title}`,
        description: props.movie.description,

        openGraph: {
            title: `Next Movies | ${props.movie.title}`,
            description: props.movie.description,
        },
    }

    return (
        <>
            <NextSeo {...SEO} />
            <div className={classes.MovieContainer}>
                <h2 className={classes.Title}>{props.movie.title}</h2>
                <p className={classes.Content} dangerouslySetInnerHTML={{ __html: props.movie.description }} />
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const slug = context.query.slug
    const data = await fetchData(slug)

    return {
        props: {
            movie: data[0]
        }
    }
}

export default movie