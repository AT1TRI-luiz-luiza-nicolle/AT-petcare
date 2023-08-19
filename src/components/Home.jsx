import React from 'react'
import Header from './Header'
import Footer from './Footer'
import VLibras from '@djpfs/react-vlibras'

const Home = () => {
return (
    <div>      
        <Header/>
        <div className="secao1">
            <div className="cont">
                <h1>Cuidando com amor do seu pet</h1>
                <p className='textosecao1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam libero exercitationem et, doloremque, molestiae animi soluta incidunt ducimus maiores atque accusamus aut iste dolorum ab reprehenderit accusantium molestias rem voluptatem!</p>
                <button className='bnav'>Agendar</button>
            </div>
        </div>

        <div className="secao1">
            <div className="cont2">
                <div className="card">
                    <img className='imgcard' src="" alt="" />
                    <h4>Ração dos macaquinhos</h4>
                    <p className="preco">R$ 149,99</p>
                </div>
                <div className="contd">
                    <h1>Novidades</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora assumenda repellat officia consectetur quisquam ducimus in aperiam eum ipsum doloremque! Tempore laudantium quisquam laborum nemo debitis commodi blanditiis molestias amet.</p>
                    <button className='bnav'>Agendar</button>
                </div>
            </div>
        </div>

        <div className="secao3">
            <div className="cont3">
                <h1 className='titrede'>Acompanhe nossas redes sociais</h1>
                <div className="redes">
                    <div className='linha1'>
                        <div className="rede">
                            <img className="redeimg" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                            <p>Facebook</p>
                        </div>
                        <div className="rede">
                            <img className="redeimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" alt="" />
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className='linha2'>
                        <div className="rede">
                            <img className="redeimg" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" alt="" />
                            <p>Twitter</p>
                        </div>
                        <div className="rede">
                            <img className="redeimg" src="" alt="" />
                            <p>Outra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)
}
export default Home
