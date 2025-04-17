import React from 'react'

const Buttons = ({text , bgCol , col}) => {
  return (
    <div>
        <button style={{color : col , backgroundColor : bgCol, padding : '15px 20px', fontWeight : 'bold', border : 'none', borderRadius : '5px'}}>{text}</button>
    </div>
  )
}

export default Buttons