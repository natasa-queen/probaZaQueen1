import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'

export default function DrugaStrana() {
  return(
      <Layout>
        <h1>Druga strana!</h1>
      </Layout>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Druga strana" />
      </>
  )
}
