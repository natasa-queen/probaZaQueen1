import React from 'react'

import '../assets/css/layout.scss'

import Navigacija from './Navbar'

import Obavest from '../components/Obavest'

// import Pahulje from '../components/Pahulje'

import PahuljaTest from "../components/PahuljaTest";




const Layout = ({ children }) => {
    return(
        <>

          {/*<Pahulje />*/}

          <PahuljaTest />


          <Obavest />

          <Navigacija />

          <div className='kontejner' >


              {children}
          </div>

        </>
    )
}
export default Layout