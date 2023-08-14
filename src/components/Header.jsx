import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
return (
    <div>
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