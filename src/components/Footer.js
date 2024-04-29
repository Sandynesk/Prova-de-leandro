import React from 'react';
import './Css/Footer.css'


function Footer() {
  return (
    <div className='Footer-conteiner'>
        <footer className='Footer'>
        <img className='sesi' src={require('./Fotos/SESI.png')} alt="Descrição da 
imagem" />
            <p className='footer-text'>© 2024 todos os direitos reservados ao povo do 3º/informática para internet.</p>
            <p className='footer-sub'>Contato: almossar@cabacos.com</p>

        </footer>
    </div>
  );
}

export default Footer;


