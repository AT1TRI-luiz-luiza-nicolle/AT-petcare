import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
return (
    <div>
         {/* <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pet Care
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <div className='Nbar'>
        <h1 className='hnav'>Pet care</h1>
        <div className="link">
            <p className='pnav'>Teste</p>
            <p className='pnav'>Teste</p>
            <p className='pnav'>Teste</p>
            <p className='pnav'>Teste</p>
        </div>
        <button className='bnav'>Agendar</button>
      </div>
    </div>
)
}
export default Header