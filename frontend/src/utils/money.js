import React from 'react'

const  FormatMoney= (amountCents) => {
  return `$${(amountCents / 100).toFixed(2)}`
}

export default FormatMoney
