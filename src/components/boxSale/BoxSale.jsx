import React from 'react'
import './boxSale.css'

const BoxSale = ({saleImg , imgHero , likeImg , autoDivasBtn , Buttons , Buttons2}) => {
  let boxs = [
    {
      like : likeImg ,
      sale : saleImg ,
      hero : imgHero ,
      auto : autoDivasBtn ,
      btn1 : Buttons ,
      btn2 : Buttons2
    }
    // ,{
    //   like : likeImg ,
    //   sale : saleImg ,
    //   hero : imgHero ,
    //   auto : autoDivasBtn ,
    //   btn1 : Buttons ,
    //   btn2 : Buttons2
    // },
    // {
    //   like : likeImg ,
    //   sale : saleImg ,
    //   hero : imgHero ,
    //   auto : autoDivasBtn ,
    //   btn1 : Buttons ,
    //   btn2 : Buttons2
    // }
  ]
  return (
    <div>
        {boxs.map((e , i)=>{
          return (
            <div className="box" key={i}>
          <div style={{width : '100%', display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
            <img src={e.sale} alt="" />
            <img src={e.like} alt="" />
          </div>
          <img style={{width : '100%', marginTop : '15px'}} src={e.hero} alt="" />
          <h2><img src={e.auto} alt="" />₦600,000</h2>
          <h3>Nokia Essential Wireless Headphones 120CM BLACK</h3>
          <div style={{display : 'flex', alignItems : 'center', width : '100% ', justifyContent : 'space-between'}}>
          {e.btn1}
          {e.btn2}
          </div>
        </div>
          )
        })}
    </div>
  )
}

export default BoxSale