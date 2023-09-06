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

        <div className="obavest ">



            {obavest.map(({node}) => {
                return(
                    <div>
                        <h5 key={node.id}>
                            {node.childMarkdownRemark.frontmatter.title}
                        </h5>

                        {node.childMarkdownRemark.frontmatter.objavi ? (
                            <p>This is a draft.</p>
                        ) : (
                            <p>F A L S E</p>
                        )}

                    </div>
                )
            })}


            {/*{obavest.map(({node}) => {*/}
            {/*    return(*/}
            {/*        <p>*/}
            {/*            {node.childMarkdownRemark.rawMarkdownBody}*/}
            {/*        </p>*/}
            {/*    )*/}
            {/*})}*/}


        </div>

    )
}

export default Obavest
