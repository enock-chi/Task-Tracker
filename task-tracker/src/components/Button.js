import React from 'react'

const Button = ({varClass, label, onClick}) => {
  return (
     <React.Fragment>
             <button className={varClass}>
                    {label}
             </button>
     </React.Fragment>
  )
}

export default Button
