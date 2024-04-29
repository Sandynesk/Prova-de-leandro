import React from 'react';
import './Css/Blocao.css'
import imgMulher2 from './Fotos/FOTO5.jpg'

    
function Blocao(props) {
      return (

        <div className='Imagens'>
        

          <img src={imgMulher2} alt="Mulher" className="img-mulher"></img> 
          <img src={imgMulher2} alt="Mulher" className="img-mulher"></img> 
          <img src={imgMulher2} alt="Mulher" className="img-mulher"></img> 

        </div>


      );
    }
    

export default Blocao;