import React from 'react'
import './boxSale.css'

const BoxSale = ({saleImg , imgHero , likeImg , autoDivasBtn , Buttons , Buttons2}) => {
  return (
    <div>
        <div className="box">
          <div style={{widows : '100%', display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
            <img src={saleImg} alt="" />
            <img src={likeImg} alt="" />
          </div>
          <img style={{width : '100%', marginTop : '15px'}} src={imgHero} alt="" />
          <h2><img src={autoDivasBtn} alt="" />₦600,000</h2>
          <h3>Nokia Essential Wireless Headphones 120CM BLACK</h3>
          <div style={{display : 'flex', alignItems : 'center', width : '100% ', justifyContent : 'space-between'}}>
          {Buttons2}
          {Buttons}
          </div>
        </div>
    </div>
  )
}

export default BoxSale