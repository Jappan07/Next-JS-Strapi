import React from "react"
import axios from "../../axios-global-config"
import { useRouter } from "next/router"
import classes from "./styles.module.scss"

const fetchData = async (start) => {
    let data = null
    await axios.get(`/movies?_limit=3&_start=${start}`)
        .then(response => {
            data = response.data
        })
    return data
}

const movies = (props) => {
    const router = useRouter()
    const lastPage = Math.ceil(props.numOfMovies / 3)

    return (
        <div className={classes.container}>
            <h2>List of Movies</h2>
            <ul>
                {props.movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            {movie.title}
                        </li>
                    )
                })}
            </ul>
            <div className={classes.PageControls}>
                <button
                    disabled={props.page <= 1}
                    onClick={() => router.push(`/movies?page=${+props.page - 1}`)}>
                    Previous
            </button>
                <button
                    disabled={props.page >= lastPage}
                    onClick={() => router.push(`/movies?page=${+props.page + 1}`)}>
                    Next
            </button>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const start = +page === 1 ? 0 : (+page - 1) * 3
    const numOfMoviesResponse = await axios.get("/movies/count")
    const numOfMovies = await numOfMoviesResponse.data
    const data = await fetchData(start)

    return {
        props: {
            movies: data,
            page: page,
            numOfMovies: numOfMovies
        }
    }

}

export default movies