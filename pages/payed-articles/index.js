import React from "react"
import axios from "../../axios-global-config"
import classes from "./styles.module.scss"

const payedArticles = (props) => {
    const articles = props.articles

    return (
        <div className={classes.container}>
            <h2>Payed articles</h2>
            {articles.map(article => {
                return (
                    <div key={article.id} className={classes.Article}>
                        <h3>
                            {article.title}
                        </h3>
                        <p>
                            {article.content}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export const getServerSideProps = async () => {
    const login = await axios.post('http://localhost:1337/auth/local', {
        identifier: "test@test.com",
        password: "test12345"
    });

    const loginResponse = login.data

    const response = await axios.get("/payed-articles", {
        headers: {
            Authorization: "Bearer " + loginResponse.jwt
        }
    })
    const data = await response.data

    return {
        props: {
            articles: data,
            authData: loginResponse
        }
    }
}

export default payedArticles