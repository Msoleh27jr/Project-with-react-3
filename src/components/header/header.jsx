import React from 'react'
import "./header.css"

const Header = ({logo , btnImg , caseBtn , hero, Buttons , Buttons2}) => {
  return (
    <div>
        <header>
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <li>Market Place</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='forBtn'>
                    <img src={btnImg} alt="" />
                    <img src={caseBtn} alt="" />
                </div>
            </nav>
            <section className='headerSection'>
                <aside className='headerAside'>
                    <h2>WE’RE STILL</h2>
                    <h1>Filling up <br /> the spaces.</h1>
                    <div style={{display : 'flex', gap: '20px'}}>
                    {Buttons}
                    {Buttons2}
                    </div>
                </aside>
                <img src={hero} alt="" />
            </section>
        </header>
    </div>
  )
}

export default Header