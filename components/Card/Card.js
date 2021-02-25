import React from "react"
import Link from "next/link"
import classes from "./Card.module.scss"
import Image from "next/image"

const card = (props) => {
    if (!props.movie.genre) {
        props.movie.genre = {}
        props.movie.genre.slug = "uncategorised"
    }

    return (
        <div className={classes.Card}>
            {
                props.movie.poster && <Image className={classes.Poster} src={"http://localhost:1337" + props.movie.poster.url} width={props.movie.poster.width} height={props.movie.poster.height} layout="intrinsic" />
            }
            <div className={classes.CardBody}>
                <h2 className={classes.CardTitle}>{props.movie.title}</h2>
                <p className={classes.CardText} dangerouslySetInnerHTML={{ __html: props.movie.description }} />
                <Link href="/movies/[genre]/[slug]" as={`/movies/${props.movie.genre.slug}/${props.movie.slug}`}>
                    <a className={classes.CardLink}>More about this movie...</a>
                </Link>
            </div>
        </div>
    )
}

export default card