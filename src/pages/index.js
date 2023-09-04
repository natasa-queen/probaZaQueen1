import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'

export default function Home() {
  return(
      <Layout>
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
