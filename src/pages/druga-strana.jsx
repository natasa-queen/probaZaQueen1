import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import '../assets/css/druga-strana.scss'


import Accordion from 'react-bootstrap/Accordion';



export default function DrugaStrana({ data }) {
    const total = data.allFile.totalCount
    const lista = data.allFile.edges

    return (
        <Layout>

            <div className='druga-kontejner'>
                <h1>Druga strana!</h1>
                <h3>{total}</h3>
                <div className="druga-lista">



                    {lista.map(({ node }) => {

                        const title = node.childMarkdownRemark.frontmatter.title

                        return (

                            <Accordion key={node.id} >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{title}</Accordion.Header>

                                    {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {

                                        return(

                                            <Accordion.Body className='d-flex justify-content-between usluge'>
                                                <p>{vrsta.vrstaUsluge}</p>
                                                <p>{vrsta.cenaUsluge}</p>
                                            </Accordion.Body>
                                        )
                                    })}
                                </Accordion.Item>
                            </Accordion>

                        )

                    })}


                </div>
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <>
            <Seo title="Druga strana" />
        </>
    )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "cenovnik" } }) {
      totalCount
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              vrsta {
                cenaUsluge
                vrstaUsluge
              }
            }
          }
        }
      }
    }
  }
`




