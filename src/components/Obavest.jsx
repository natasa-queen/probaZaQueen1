import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../assets/css/obavest.scss'




const Obavest = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "objava"}}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    draft
                  }
                  html
                  rawMarkdownBody
                  id
                }
              }
            }
          }
        }
  `)

    const obavest = data.allFile.edges


    return(
        <>
            {obavest.map(({node}) => {
                return(
                    <div className={node.childMarkdownRemark.frontmatter.draft ? `obavest` : `sakrij`}>
                        <p key={node.id}>
                            {node.childMarkdownRemark.rawMarkdownBody}
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default Obavest
