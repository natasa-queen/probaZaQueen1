// import React, { useState } from 'react';
// import { graphql, Script, useStaticQuery } from 'gatsby';
//
// import '../assets/css/druga-strana.scss';
// import '../assets/css/acc.scss'
// import Accordion from "react-bootstrap/Accordion";
//
//
// const Accordion2 = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allFile(filter: { relativeDirectory: { eq: "cenovnik" } }) {
//         totalCount
//         edges {
//           node {
//             id
//             childMarkdownRemark {
//               frontmatter {
//                 title
//                 vrsta {
//                   cenaUsluge
//                   vrstaUsluge
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//
//   const total = data.allFile.totalCount;
//   const lista = data.allFile.edges;
//
//   const [openAccordion, setOpenAccordion] = useState(null);
//
//   const handleAccordionClick = (index) => {
//     if (openAccordion === index) {
//       setOpenAccordion(null);
//     } else {
//       setOpenAccordion(index);
//     }
//   };
//
//   return (
//       <>
//         {/*<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />*/}
//
//         <h2>Accord 2: {total}</h2>
//
//         {lista.map(({ node }, index) => {
//           const title = node.childMarkdownRemark.frontmatter.title;
//           const uniqueId = `accordion-${node.id}`;
//           const isOpen = openAccordion === index;
//
//           return (
//               <div className="accordion " id={uniqueId} key={uniqueId}>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button
//                         className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target={`#flush-collapse-${node.id}`}
//                         aria-expanded={isOpen}
//                         aria-controls={`flush-collapse-${node.id}`}
//                         onClick={() => handleAccordionClick(index)}
//                     >
//                       {title}
//                     </button>
//                   </h2>
//                   <div
//                       id={`flush-collapse-${node.id}`}
//                       className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
//                       data-bs-parent={`#accordionFlush-${uniqueId}`}
//                   >
//                     <div className="accordion-body">
//
//                       {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {
//
//                         return(
//                               <div className="vrsta-usluge">
//                                 <p>{vrsta.vrstaUsluge}</p>
//                                 <p>{vrsta.cenaUsluge}</p>
//                               </div>
//                         )
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           );
//         })}
//       </>
//   );
// };
//
// export default Accordion2;
