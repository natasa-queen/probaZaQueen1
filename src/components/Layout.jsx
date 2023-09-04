import React from 'react'
import Navigacija from './Navbar'


const Layout = ({ children }) => {
    return(
        <>

          <Navigacija />

          <div className='kontejner' >
              {children}
          </div>

        </>
    )
}
export default Layout