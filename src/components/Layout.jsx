import React from 'react'
import Navigacija from './Navbar'

import Obavest from '../components/Obavest'



const Layout = ({ children }) => {
    return(
        <>

            <Obavest />

          <Navigacija />

          <div className='kontejner' >
              {children}
          </div>

        </>
    )
}
export default Layout