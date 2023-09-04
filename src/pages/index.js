import * as React from "react"
import { Script } from 'gatsby'
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'

export default function Home() {
  return(
      <Layout>
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
