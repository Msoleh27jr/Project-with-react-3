import './App.css'

import React from 'react'
import Header from './components/header/header'
import logo from './assets/YOUR LOGO.png'
import btnImg from './assets/Ellipse 67.png'
import caseBtn from './assets/Group 2609203.png'
import imgHeroHeader from './assets/Rectangle 10342.png'
import Buttons from './components/buttons/Buttons'
import BoxSale from './components/boxSale/BoxSale'
import btnSale from './assets/Frame 237500 (1).png'
import likeImg from './assets/Avatar (1).png'
import saleF from './assets/Frame 237500.png'
import imgHero from './assets/Image (37).png'
import social from './assets/Group 237471.png'

const App = () => {
  function get(){
    return alert("are you gay ? 🏳️‍🌈")
  }
  return (
    <div>
      <Header  logo={logo} btnImg={btnImg} caseBtn={caseBtn} hero={imgHeroHeader}  Buttons2={<Buttons text={"See Top Deals"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Explore Marketplace"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
      <section className='firstSection'>
        <div className='explore'>
          <h3>Our Top Deals</h3>
          <h3>Explore</h3>
        </div>
        <div className='forBoxs'>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
        </div>
      </section>
      <section className='firstSection'>
        <div className='explore'>
          <h3>Best Selling Product</h3>
          <h3>Explore</h3>
        </div>
        <div className='forBoxs'>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
            <BoxSale saleImg={saleF} likeImg={likeImg} autoDivasBtn={btnSale} imgHero={imgHero} Buttons2={<Buttons text={"Add to Cart"} col='black' bgCol={"transparent"}/>} Buttons={<Buttons text={"Buy Now"} col='white' bgCol={"rgba(65, 61, 238, 1)"}/>}/>
        </div>
      </section>
      <section className='secondSection'>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
        <div className='forInp'>
          <input type="text" placeholder='Enter your Email Here '/>
          <button onClick={get}>Subscribe</button>
        </div>
      </section>
      <footer>
        <div className='footerDiv'>
          <h2>Your Company</h2>
          <p>Our mission is to make gadjet</p>
          <p>purchase, accessible and affordable.</p>
        </div>
        <div className='footerDiv'>
          <h2>Helpful Links</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Marketplace</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className='footerDiv'>
          <h2>Site Map</h2>
          <p>Our Mobile App</p>
          <p>Frequently Asked Questions</p>
          <p>Help Desk</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className='footerDiv'>
          <h2>Contact Us</h2>
          <img src={social} alt="" />
          <p>hello@yourcompany.com</p>
        </div>
      </footer>
    </div>
  )
}

export default App