import React from 'react'

const Alert = (props) => {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style={{ borderRadius: '0px' }}>
    <strong>{capitalize(props.alert.type)}:{props.alert.msg}</strong>
  </div>
  )
}

export default Alert
