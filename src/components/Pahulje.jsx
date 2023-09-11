import React, { useEffect, useState } from 'react'
// import { Script } from 'gatsby'
import '../assets/css/pahulje.scss'


import Snowflakes from 'magic-snowflakes';



const Pahulje = () => {

  // useEffect(() => {
  //   const snowflakes  = new Snowflakes({
  //     color: '#000', // Default: "#5ECDEF"
  //     // container: document.querySelector(''), // Default: document.body
  //     count: 15, // 100 snowflakes. Default: 50
  //     minOpacity: 0.6, // From 0 to 1. Default: 0.6
  //     maxOpacity: 0.95, // From 0 to 1. Default: 1
  //     minSize: 10, // Default: 10
  //     maxSize: 25, // Default: 25
  //     rotation: true, // Default: true
  //     speed: 0.5, // The property affects the speed of falling. Default: 1
  //     wind: true, // Without wind. Default: true
  //     // width: 500, // Default: width of container
  //     // height: 250, // Default: height of container
  //     zIndex: 100, // Default: 9999,
  //     autoResize: true // Default: true
  //   });
  //   snowflakes.start();
  //   return () => {
  //     // snowflakes.stop();
  //     // snowflakes.destroy();
  //   };
  // }, []);


  return(
      <div className='pahulje-kontejner'>
        {/*<h2>Pahulje</h2>*/}

      </div>
  )

}
export default Pahulje