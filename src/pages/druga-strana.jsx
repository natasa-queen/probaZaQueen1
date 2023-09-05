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





                    {/*<div className="accordion accordion-flush" id="accordionFlushExample">*/}

                    {/*    {lista.map(({ node }) => {*/}

                    {/*        const title = node.childMarkdownRemark.frontmatter.title*/}

                    {/*        return (*/}
                    {/*            <div className="accordion-item" key={node.id}>*/}

                    {/*                <h2 className="accordion-header">*/}
                    {/*                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"*/}
                    {/*                            data-bs-target="#flush-collapseOne" aria-expanded="false"*/}
                    {/*                            aria-controls="flush-collapseOne">*/}
                    {/*                        {title}*/}
                    {/*                    </button>*/}
                    {/*                </h2>*/}


                    {/*                {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {*/}
                    {/*                    return(*/}

                    {/*                        <div id="flush-collapseOne" className="accordion-collapse collapse"*/}
                    {/*                             data-bs-parent="#accordionFlushExample">*/}
                    {/*                            <div className="accordion-body">*/}

                    {/*                                <p>{vrsta.vrstaUsluge}</p>*/}
                    {/*                                <p>{vrsta.cenaUsluge}</p>*/}

                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    )*/}
                    {/*                })}*/}

                    {/*            </div>*/}
                    {/*        )*/}

                    {/*    })}*/}
                    {/*</div>*/}




                    {/*<ul>*/}
                    {/*    {lista.map(({ node }) => {*/}

                    {/*        const title = node.childMarkdownRemark.frontmatter.title*/}

                    {/*        return (*/}
                    {/*            <li key={node.id}>*/}
                    {/*                <h3>{title}</h3>*/}

                    {/*                {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {*/}
                    {/*                    return(*/}
                    {/*                        <div className='usluge'>*/}
                    {/*                            <p>{vrsta.vrstaUsluge}</p>*/}
                    {/*                            <p>{vrsta.cenaUsluge}</p>*/}
                    {/*                        </div>*/}
                    {/*                    )*/}
                    {/*                })}*/}

                    {/*            </li>*/}
                    {/*        )*/}

                    {/*    })}*/}
                    {/*</ul>*/}

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




