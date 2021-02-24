import React, { useState } from "react"
import axios from "../../axios-global-config"
import classes from "./styles.module.scss"

const addMovie = () => {
    const [movieTitle, setMovieTitle] = useState("")
    const [movieSlug, setMovieSlug] = useState("")
    const [moviedescription, setMovieDescription] = useState("")
    const [file, setFile] = useState(null)

    // const onFileUpload = (event) => {
    //     console.log(event.target.files[0])
    //     setFile(event.target.files[0])
    // }

    const onSubmitHandler = async () => {

        const movieInfo = {
            title: movieTitle,
            slug: movieSlug,
            description: moviedescription,
        }

        // axios.post("/movies", movieInfo)
        //     .then(response => {
        //         console.log(response.data)
        //     })

        const add = await fetch("http://localhost:1337/movies", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieInfo)
        })

    }

    return (
        <div className={classes.container}>
            <h2>Add Movies</h2>
            <div className={classes.FormContainer}>
                <form onSubmit={() => onSubmitHandler()}>
                    <input type="text" onChange={e => setMovieTitle(e.target.value)} value={movieTitle} placeholder="Movie Title" /><br />
                    <input type="text" onChange={e => setMovieSlug(e.target.value)} value={movieSlug} placeholder="Movie slug" /><br />
                    <textarea onChange={e => setMovieDescription(e.target.value)} value={moviedescription} placeholder="Movie Description" /><br />
                    {/* <input type='file' onChange={e => onFileUpload(e)} /><br /> */}
                    <button>Add Movie</button>
                </form>
            </div>
        </div>
    )
}

export default addMovie