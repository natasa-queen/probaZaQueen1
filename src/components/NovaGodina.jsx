import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../assets/css/pahulje.scss'

import confetti from 'canvas-confetti'
import snow from 'canvas-confetti'



const NovaGodina = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "efekti/nova-godina.md"}}) {
        totalCount
        nodes {
          childMarkdownRemark {
            frontmatter {
              draft
            }
          }
        }
      }
    }
  `)



  const initialNovaGodina = data.allFile.nodes[0].childMarkdownRemark.frontmatter.draft;
  const [novaGodina, setNovaGodina] = useState(initialNovaGodina);

  useEffect(() => {

    const skew = 18;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function frame() {

      const ticks = Math.max(200, 250);

      snow({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ['#E89400'],
        shapes: ['star'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (novaGodina) {
        requestAnimationFrame(frame);
      }
    }

    if (novaGodina) {
      requestAnimationFrame(frame);
    }
  }, [novaGodina]);

  // Funkcija za zaustavljanje confetti efekta
  // const zaustaviConfetti = () => {
  //   setNovaGodina(false);
  // };



  return(
      <div className='pahulje-kontejner'>


      </div>
  )

}
export default NovaGodina