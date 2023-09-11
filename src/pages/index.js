import * as React from "react"
import { Script } from 'gatsby'
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import '../assets/css/main.scss'

// import Pahulje from '../components/Pahulje'

// import PahuljaTest from "../components/PahuljaTest";


export default function Home() {
  return(
      <Layout>
        {/*<Pahulje />*/}

        {/*<PahuljaTest />*/}

        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <h1>Zdravo svete!</h1>
      </Layout>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Pocetna" />
      </>
  )
}
