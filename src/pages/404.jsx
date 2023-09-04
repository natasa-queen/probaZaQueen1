import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'

export default function Error() {
  return(
      <Layout>
        <h1>Error Page</h1>
      </Layout>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Error" />
      </>
  )
}
