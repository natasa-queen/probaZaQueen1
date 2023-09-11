import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/navigacija.scss'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigacija() {
  return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navigacija">
        <Container>
          <Navbar.Brand href="/">
            GatsbyJs Test
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#features">Pocetna</Nav.Link>*/}
              {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>
            <Nav className='nav-box'>
              <Link to="/" className='nav-item'>Pocetna</Link>
              <Link to="/druga-strana" className='nav-item'>Druga strana</Link>
              <Link to="/treca-strana" className='nav-item'>Treca strana</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigacija;








// function Navigacija() {
//   return (
//       <>
//         <Navbar className="bg-body-tertiary">
//           <Container>
//             <Navbar.Brand href="#home">Brand link</Navbar.Brand>
//           </Container>
//         </Navbar>
//         <br />
//         <Navbar className="bg-body-tertiary">
//           <Container>
//             <Navbar.Brand>Brand text</Navbar.Brand>
//           </Container>
//         </Navbar>
//         <br />
//         <Navbar className="bg-body-tertiary">
//           <Container>
//             <Navbar.Brand href="#home">
//               <img
//                   src="/img/logo.svg"
//                   width="30"
//                   height="30"
//                   className="d-inline-block align-top"
//                   alt="React Bootstrap logo"
//               />
//             </Navbar.Brand>
//           </Container>
//         </Navbar>
//         <br />
//         <Navbar className="bg-body-tertiary">
//           <Container>
//             <Navbar.Brand href="#home">
//               <img
//                   alt=""
//                   src="/img/logo.svg"
//                   width="30"
//                   height="30"
//                   className="d-inline-block align-top"
//               />{' '}
//               React Bootstrap
//             </Navbar.Brand>
//           </Container>
//         </Navbar>
//       </>
//   );
// }
//
// export default Navigacija;