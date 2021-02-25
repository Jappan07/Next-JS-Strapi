import styles from '../styles/Home.module.css'
import Card from "../components/Card/Card"
import axios from "../axios-global-config"

const fetchData = async () => {
  let data = null
  await axios.get(`/movies`)
    .then(response => {
      data = response.data
    })
  return data
}

const Home = (props) => {
  return (
    <div>
      <h2 style={{ margin: "30px 0 0 30px" }}>Latest Movies</h2>
      <div className={styles.container}>
        {props.movies.map(movie => {
          return (
            <Card key={movie.id} movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetchData()

  return {
    props: {
      movies: data
    }
  }

}

export default Home