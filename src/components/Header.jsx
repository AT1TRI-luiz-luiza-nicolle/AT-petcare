import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
return (
    <div>
      <div className='Nbar'>
        <img className='petlogo' src="https://media.discordapp.net/attachments/1138062582964551720/1140602698648014938/logo.png" alt="" />
        <h1 className='hnav'>Pet care</h1>
        <div className="link">
            <p className='pnav'><a href="/">Home</a></p>
            <p className='pnav'><a href="/sobre">Sobre nós</a></p>
            <p className='pnav'><a href="/tecno">Nossa inovação</a></p>
            <p className='pnav'><a href="/">Contato</a></p>
        </div>
        <button className='bnav'>Agendar</button>
      </div>
      {/* <div>
      <div className='top'>

        <Navbar>
          <Container className="container-fluid py-2">
            <img className="navbar-brand mx-auto fw-bold" src="https://media.discordapp.net/attachments/1138062582964551720/1140603145001635900/LOGO_1.png" alt="" width="80px"/>
            <Nav className="me-auto">
            <a href="/">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="/">Quem somos</a>&nbsp;&nbsp;&nbsp;
            <a href="/">Contato</a>&nbsp;&nbsp;&nbsp;

              <button> Agendar </button>
            </Nav>
          </Container>
        </Navbar>
              </div>
              </div> */}
    </div>
)
}
export default Header