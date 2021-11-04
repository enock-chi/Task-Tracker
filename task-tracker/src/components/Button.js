import React from 'react'

const Button = ({varClass, text, onClick}) => {
  return (
     <React.Fragment>
             <button className={varClass} onClick={onClick}>
                    {text}
             </button>
     </React.Fragment>
  )
}

export default Button
