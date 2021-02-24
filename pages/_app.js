import '../styles/globals.css'
import Header from "../components/Header/Header"
import axios from "../axios-global-config"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

const app = ({ Component, pageProps, navigation }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header navigation={navigation} isDark={false} />
      <Component {...pageProps} />
    </>
  )
}

app.getInitialProps = async () => {
  const response = await axios.get("/navigations")
  const navigation = await response.data
  return { navigation }
}

export default app