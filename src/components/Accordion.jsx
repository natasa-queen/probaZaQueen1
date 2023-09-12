import React from 'react'

import * as mdb from 'mdb-ui-kit';

import {graphql, useStaticQuery, Script } from "gatsby";


const Accordion = () => {

  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "cenovnik"}}) {
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
  `)

  const total = data.allFile.totalCount
  const lista = data.allFile.edges

  return(
      <mdb>
        <Script src={"cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"} />

        <h2>Accordion: {total}</h2>


        {lista.map(({node}) => {

          const title = node.childMarkdownRemark.frontmatter.title

          const uniqueId = `accordion-${node.id}`;

          return(
              <div className="accordion accordion-flush" id={uniqueId} key={uniqueId}>

                <div className="accordion-item">
                  <h2 className="accordion-header" >
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target={`#${uniqueId}-content`}
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                      {title}
                    </button>
                  </h2>
                  <div
                      id={`${uniqueId}-content`}
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-mdb-parent={`#${uniqueId}`}
                  >
                    <div className="accordion-body">



                    </div>
                  </div>
                </div>

              </div>
          )
        })}




      </mdb>
  )
}
export default Accordion

// export const query = graphql`
//   query {
//     allFile(filter: { relativeDirectory: { eq: "cenovnik" } }) {
//       totalCount
//       edges {
//         node {
//           id
//           childMarkdownRemark {
//             frontmatter {
//               title
//               vrsta {
//                 cenaUsluge
//                 vrstaUsluge
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `