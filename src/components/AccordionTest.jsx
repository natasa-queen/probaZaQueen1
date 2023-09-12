import React from 'react'

import '../assets/css/druga-strana.scss'

// import * as mdb from 'mdb-ui-kit';

import {graphql, useStaticQuery} from "gatsby";


import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';




function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
  );

  return (
      <button
          type="button"
          style={{ backgroundColor: 'pink' }}
          onClick={decoratedOnClick}
      >
        {children}
      </button>
  );
}


const AccordionTest = () => {

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
      <>
        <h2>Accordion: {total}</h2>



        {lista.map(({node}) => {
          return(
              <Accordion>
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey={node.id}>
                      {node.childMarkdownRemark.frontmatter.title}
                    </CustomToggle>
                  </Card.Header>
                </Card>
                <Accordion.Collapse eventKey={node.id}>
                  <Card.Body>KOOKK</Card.Body>
                </Accordion.Collapse>
              </Accordion>
          )
        })}







        {/*<Accordion >*/}
        {/*  <Card>*/}
        {/*    <Card.Header>*/}
        {/*      <CustomToggle eventKey="0">Click me!</CustomToggle>*/}
        {/*    </Card.Header>*/}
        {/*    <Accordion.Collapse eventKey="0">*/}
        {/*      <Card.Body>Hello! I'm the body</Card.Body>*/}
        {/*    </Accordion.Collapse>*/}
        {/*  </Card>*/}
        {/*  <Card>*/}
        {/*    <Card.Header>*/}
        {/*      <CustomToggle eventKey="1">Click me!</CustomToggle>*/}
        {/*    </Card.Header>*/}
        {/*    <Accordion.Collapse eventKey="1">*/}
        {/*      <Card.Body>Hello! I'm another body</Card.Body>*/}
        {/*    </Accordion.Collapse>*/}
        {/*  </Card>*/}
        {/*</Accordion>*/}


        {/*{lista.map(({node}) => {*/}

        {/*  const title = node.childMarkdownRemark.frontmatter.title*/}

        {/*  const uniqueId = `accordion-${node.id}`;*/}

        {/*  return(*/}
        {/*      <div className="accordion accordion-flush" id={uniqueId} key={uniqueId}>*/}

        {/*        <div className="accordion-item">*/}
        {/*          <h2 className="accordion-header" >*/}
        {/*            <button*/}
        {/*                className="accordion-button collapsed"*/}
        {/*                type="button"*/}
        {/*                data-mdb-toggle="collapse"*/}
        {/*                data-mdb-target={`#${uniqueId}-content`}*/}
        {/*                aria-expanded="false"*/}
        {/*                aria-controls="flush-collapseOne"*/}
        {/*            >*/}
        {/*              {title}*/}
        {/*            </button>*/}
        {/*          </h2>*/}
        {/*          <div*/}
        {/*              id={`${uniqueId}-content`}*/}
        {/*              className="accordion-collapse collapse"*/}
        {/*              aria-labelledby="flush-headingOne"*/}
        {/*              data-mdb-parent={`#${uniqueId}`}*/}
        {/*          >*/}
        {/*            <div className="accordion-body">*/}



        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*      </div>*/}
        {/*  )*/}
        {/*})}*/}




      </>
  )
}
export default AccordionTest
