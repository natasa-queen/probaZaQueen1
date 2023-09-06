import React, { useState } from 'react'
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
                    objavi
                  }
                  id
                }
              }
            }
          }
        }
  `)

    const obavest = data.allFile.edges



    return(

        <div className="obavest ">



            {obavest.map(({node}) => {
                return(
                    <h5 key={node.id}>
                        {node.childMarkdownRemark.frontmatter.title}
                    </h5>
                )
            })}

        </div>

    )
}

export default Obavest
